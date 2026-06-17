import { Link } from "@tanstack/react-router";
import { Menu, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { Button } from "@/components/ui/button";

// 👉 import logo
import logo from "@/assets/logo.png";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/programs", label: t("nav.programs") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* LOGO + BRAND */}
        <Link to="/" className="flex items-center gap-2">
          
          {/* LOGO */}
          <img
            src={logo}
            alt="Company Logo"
            className="h-10 w-10 object-contain rounded-md"
          />

          {/* BRAND NAME */}
          <div className="leading-tight">
            
            {/* Main Title */}
            <div className="text-[13px] font-bold tracking-wide text-foreground md:text-sm">
              CAMBODIAN SPEED ACCURATE
            </div>

            {/* Subtitle */}
            <div className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground md:text-[10px]">
              TACTICAL CO., LTD.
            </div>

          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-2">

          {/* LANGUAGE */}
          <button
            onClick={() => setLang(lang === "en" ? "km" : "en")}
            className="hidden h-9 rounded-md border border-border bg-background px-3 text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-accent sm:inline-flex sm:items-center"
            aria-label="Toggle language"
          >
            {lang === "en" ? "ខ្មែរ" : "EN"}
          </button>

          {/* THEME */}
          <button
            onClick={toggle}
            className="grid h-9 w-9 place-items-center rounded-md border border-border bg-background transition-colors hover:bg-accent"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* APPLY BUTTON */}
          <Button
            asChild
            className="hidden bg-gold-gradient text-gold-foreground shadow-gold hover:opacity-90 md:inline-flex"
          >
            <Link to="/apply">{t("cta.apply")}</Link>
          </Button>

          {/* MOBILE MENU */}
          <button
            onClick={() => setOpen(!open)}
            className="grid h-9 w-9 place-items-center rounded-md border border-border md:hidden"
            aria-label="Menu"
          >
            <Menu className="h-4 w-4" />
          </button>

        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container mx-auto flex flex-col px-4 py-3">

            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}

            <Link
              to="/apply"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-md bg-gold-gradient px-4 text-sm font-semibold text-gold-foreground"
            >
              {t("cta.apply")}
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}