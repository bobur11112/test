import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check } from "lucide-react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Минимум 2 символа")
    .max(50, "Максимум 50 символов"),
  phone: z
    .string()
    .min(7, "Введите корректный номер")
    .regex(/^[\d\s\-+()]+$/, "Только цифры и символы + - ( )"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "" },
  });

  const onSubmit = async (_data: FormValues) => {
    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 border-b border-border">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6">
          {/* Left copy */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.12em] text-muted mb-6">
                <span className="block w-6 h-px bg-accent" />
                Заявка
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-medium tracking-tight leading-tight mb-4">
                Начните сейчас
              </h2>
              <p className="text-muted text-[15px] leading-relaxed max-w-[400px]">
                Оставьте заявку — мы свяжемся с вами в течение 30 минут и
                бесплатно проконсультируем по вашей ситуации.
              </p>
            </motion.div>
          </div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 lg:col-start-8 flex items-center"
          >
            {submitted ? (
              <div className="w-full py-12 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center mb-4">
                  <Check size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-medium mb-2">Заявка отправлена</h3>
                <p className="text-sm text-muted">
                  Мы свяжемся с вами в ближайшее время
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6">
                {/* Name */}
                <div className="relative">
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Имя"
                    autoComplete="given-name"
                    className="w-full py-4 text-[15px] bg-transparent border-b border-border outline-none placeholder:text-[#aaa] focus:border-accent transition-colors duration-200"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 focus-within:w-full" />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1.5">{errors.name.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="Телефон"
                    autoComplete="tel"
                    className="w-full py-4 text-[15px] bg-transparent border-b border-border outline-none placeholder:text-[#aaa] focus:border-accent transition-colors duration-200"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1.5">{errors.phone.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group self-start inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? "Отправляем…" : "Получить консультацию"}
                  {!isSubmitting && (
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  )}
                </button>

                <p className="text-xs text-[#aaa]">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
