import { Link } from "@tanstack/react-router";
import {
  Phone,
  Send,
  MapPin,
  Facebook,
  Globe,
} from "lucide-react";

import { useI18n } from "@/lib/i18n";

// 👉 Logo
import logo from "@/assets/logo.png";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-16 border-t border-white/10 bg-primary text-primary-foreground">

      {/* MAIN FOOTER */}
      <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-4">

        {/* BRAND */}
        <div className="md:col-span-2">

          {/* LOGO + NAME */}
          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="Company Logo"
              className="h-10 w-10 rounded-lg object-contain bg-white/10 p-1"
            />

            <div className="leading-tight">

              <div className="text-[12px] font-bold tracking-wide sm:text-[13px]">
                CAMBODIAN SPEED ACCURATE
              </div>

              <div className="text-[8px] uppercase tracking-[0.2em] text-primary-foreground/60">
                TACTICAL CO., LTD.
              </div>

            </div>

          </div>

          {/* DESCRIPTION */}
          <p className="mt-4 max-w-sm text-[13px] leading-6 text-primary-foreground/65">
            {t("footer.tagline")}
          </p>

        </div>

        {/* PROGRAMS */}
        <div>

          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {t("nav.programs")}
          </h4>

          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">

            <li>
              <Link
                to="/programs/$slug"
                params={{ slug: "security" }}
                className="transition hover:text-gold"
              >
                Security
              </Link>
            </li>

            <li>
              <Link
                to="/programs/$slug"
                params={{ slug: "firefighting" }}
                className="transition hover:text-gold"
              >
                Fire Fighting
              </Link>
            </li>

            <li>
              <Link
                to="/programs/$slug"
                params={{ slug: "drone" }}
                className="transition hover:text-gold"
              >
                Drone
              </Link>
            </li>

            <li>
              <Link
                to="/programs/$slug"
                params={{ slug: "chinese" }}
                className="transition hover:text-gold"
              >
                Chinese
              </Link>
            </li>

          </ul>

        </div>

        {/* CONTACT */}
        <div>

          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {t("nav.contact")}
          </h4>

          <div className="mt-4 space-y-3">

            {/* PHONE */}
            <a
              href="tel:+855023975678"
              className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition hover:border-gold/50 hover:bg-white/10"
            >

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10">
                <Phone className="h-3.5 w-3.5 text-gold" />
              </div>

              <div>
                <div className="text-[10px] text-primary-foreground/45">
                  Phone
                </div>

                <div className="text-[13px] font-medium">
                  +855 023 975 678
                </div>
              </div>

            </a>

            {/* TELEGRAM */}
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition hover:border-gold/50 hover:bg-white/10"
            >

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10">
                <Send className="h-3.5 w-3.5 text-gold" />
              </div>

              <div>
                <div className="text-[10px] text-primary-foreground/45">
                  Telegram
                </div>

                <div className="text-[13px] font-medium">
                  CAMBODIAN SPEED
                </div>
              </div>

            </a>

            {/* LOCATION */}
            <a
              href="https://maps.google.com/?q=Phnom+Penh+Cambodia"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition hover:border-gold/50 hover:bg-white/10"
            >

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10">
                <MapPin className="h-3.5 w-3.5 text-gold" />
              </div>

              <div>
                <div className="text-[10px] text-primary-foreground/45">
                  Location
                </div>

                <div className="text-[13px] font-medium">
                  Phnom Penh
                </div>
              </div>

            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">

        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-4 text-[11px] text-primary-foreground/50 sm:flex-row">

          {/* COPYRIGHT */}
          <div>
            © {new Date().getFullYear()} CAMBODIAN SPEED ACCURATE
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-2">

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-gold hover:text-gold"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>

            <a
              href="https://www.youtube.com/@cambodianspeed"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-gold hover:text-gold"
            >
              <Globe className="h-3.5 w-3.5" />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}