import { MessageCircle, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 lg:py-10">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <span className="text-base font-semibold tracking-tight">RestoTarget</span>
            <span className="text-xs text-muted">
              © {new Date().getFullYear()} Все права защищены
            </span>
          </div>

          {/* Contacts */}
          <div className="flex items-center gap-5">
            <a
              href="https://wa.me/79001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted hover:text-accent transition-colors duration-200"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href="https://t.me/restotarget"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted hover:text-accent transition-colors duration-200"
            >
              <Send size={16} />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
