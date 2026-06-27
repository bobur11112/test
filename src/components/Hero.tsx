import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const stats = [
  { number: "500+", label: "Успешных кейсов" },
  { number: "24ч", label: "Скорость решения" },
  { number: "98%", label: "Довольных клиентов" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 relative">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main content */}
          <div className="lg:col-span-8 py-16 lg:py-24">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border border-border text-xs font-medium text-muted tracking-wide mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
              Принимаем заявки
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[clamp(2.4rem,5vw,4rem)] font-medium leading-[1.1] tracking-tight mb-6"
            >
              Восстанавливаем доступ.
              <br />
              <span className="text-accent">Масштабируем прибыль.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-muted max-w-[520px] mb-10 leading-relaxed"
            >
              Возвращаем заблокированные аккаунты Instagram и запускаем
              таргетированную рекламу, которая приносит клиентов.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-all duration-200 hover:-translate-y-0.5"
              >
                Получить консультацию
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-4 border border-border text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors duration-200"
              >
                Подробнее
              </a>
            </motion.div>
          </div>

          {/* Stats sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="lg:col-span-4 flex lg:flex-col justify-between lg:justify-end gap-4 pb-16 lg:pb-24"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="py-4 border-t border-border flex-1 lg:flex-none">
                <div className="text-3xl font-medium tracking-tight">{stat.number}</div>
                <div className="text-[13px] text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}
