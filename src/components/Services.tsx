import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Target, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Target,
    title: "Таргетированная реклама",
    description:
      "Настраиваем рекламу в Instagram и Facebook, которая приводит целевых клиентов. Полный цикл — от стратегии до оптимизации.",
    features: [
      "Аудит текущей рекламы",
      "Создание креативов",
      "A/B тестирование",
      "Ежедневная оптимизация",
    ],
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Восстановление Instagram",
    description:
      "Возвращаем доступ к заблокированным аккаунтам: бан, взлом, потеря пароля. Работаем напрямую с поддержкой Meta.",
    features: [
      "Разблокировка аккаунтов",
      "Восстановление после взлома",
      "Снятие ограничений",
      "Верификация аккаунта",
    ],
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 border-b border-border">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.12em] text-muted mb-6"
            >
              <span className="block w-6 h-px bg-accent" />
              Услуги
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[clamp(1.6rem,3vw,2.4rem)] font-medium tracking-tight leading-tight"
            >
              Два направления —<br />одна цель
            </motion.h2>
          </div>
          <div className="lg:col-span-6 flex items-end lg:justify-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted text-[15px] max-w-[400px] leading-relaxed"
            >
              Помогаем бизнесу вернуть контроль над аккаунтами и масштабировать
              продажи через точную рекламу.
            </motion.p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              className="group relative border border-border p-8 lg:p-10 overflow-hidden transition-colors duration-300 hover:border-accent"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

              <span className="text-xs font-medium text-muted tracking-wider mb-8 block">
                {service.number}
              </span>

              <div className="w-10 h-10 flex items-center justify-center text-accent mb-5">
                <service.icon size={28} strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-medium mb-3">{service.title}</h3>

              <p className="text-[15px] text-muted leading-relaxed mb-8 max-w-[400px]">
                {service.description}
              </p>

              <ul className="flex flex-col gap-2.5 mb-8">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-[13px] text-muted"
                  >
                    <span className="w-1 h-px bg-accent shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="inline-flex items-center gap-2 text-sm font-medium text-accent group/btn">
                Подробнее
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover/btn:translate-x-1"
                />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
