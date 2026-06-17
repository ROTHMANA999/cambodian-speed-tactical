import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { Program } from "@/lib/programs";

export function ProgramCard({ program }: { program: Program }) {
  const { t, lang } = useI18n();
  const Icon = program.icon;
  return (
    <Link
      to="/programs/$slug"
      params={{ slug: program.slug }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant"
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${program.accent}`} />
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-gold-gradient group-hover:text-gold-foreground">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="font-display text-xl font-bold text-card-foreground">
        {lang === "en" ? program.titleEn : program.titleKm}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {lang === "en" ? program.taglineEn : program.taglineKm}
      </p>
      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm">
        <span className="font-medium text-foreground/80">
          {lang === "en" ? program.durationEn : program.durationKm}
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-gold">
          {t("cta.learnMore")} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
