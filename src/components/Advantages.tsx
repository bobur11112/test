import { useRef } from "react";
import { motion, useInView } from "motion/react";

const items = [
  {
    number: "₽0",
    title: "Оплата по результату",
    text: "Вы платите только когда получаете результат. Никаких предоплат и скрытых условий.",
  },
  {
    number: "24ч",
    title: "Скорость от 24 часов",
    text: "Начинаем работу в день обращения. Большинство задач решаем в первые сутки.",
  },
  {
    number: "500+",
    title: "Успешных кейсов",
    text: "Опыт работы с аккаунтами любой сложности — от личных блогов до корпоративных страниц.",
  },
];

export default function Advantages() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="advantages" ref={ref} className="py-24 lg:py-32 border-b border-border">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.12em] text-muted mb-6">
            <span className="block w-6 h-px bg-accent" />
            Преимущества
          </div>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-medium tracking-tight leading-tight">
            Почему выбирают нас
          </h2>
        </motion.div>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`py-8 px-8 transition-colors duration-300 hover:bg-surface ${
                index > 0 ? "md:border-l border-t md:border-t-0 border-border" : ""
              } ${index === 0 ? "md:pl-0" : ""}`}
            >
              <div className="text-4xl font-medium tracking-tight text-accent mb-3 leading-none">
                {item.number}
              </div>
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
