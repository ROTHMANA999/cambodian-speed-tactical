import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { programs } from "@/lib/programs";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      {
        title:
          "Programs — CAMBODIAN SPEED ACCURATE TACTICAL CO., LTD.",
      },
      {
        name: "description",
        content:
          "Security, Fire Fighting, Drone, and Chinese Language training programs.",
      },
    ],
  }),

  component: Programs,
});

function Programs() {
  const { t, lang } = useI18n();

  return (
    <div className="container mx-auto px-4 py-20">

      {/* HEADER */}
      <div className="mx-auto max-w-3xl text-center space-y-4">

        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
          {t("nav.programs")}
        </div>

        <h1 className="text-4xl font-bold md:text-5xl leading-tight">
          {t("programs.title")}
        </h1>

        <p className="text-lg leading-8 text-muted-foreground">
          {t("programs.subtitle")}
        </p>
      </div>

      {/* GRID */}
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {programs.map((p) => (
          <div
            key={p.slug}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

            <div className="flex h-full flex-col p-6">

              {/* TITLE */}
              <h3 className="text-lg font-bold leading-snug">
                {lang === "en" ? p.titleEn : p.titleKm}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {lang === "en" ? p.taglineEn : p.taglineKm}
              </p>

              {/* DETAILS */}
              <div className="mt-5 space-y-2 text-sm text-foreground/80">

                <div>
                  <span className="font-semibold text-foreground">
                    {lang === "en" ? "Duration:" : "រយៈពេល៖"}
                  </span>{" "}
                  {lang === "en" ? p.durationEn : p.durationKm}
                </div>

              </div>

              {/* BUTTON */}
              <div className="mt-auto pt-6">
                <button className="w-full rounded-xl bg-yellow-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-400">
                  {lang === "en" ? "Learn More" : "មើលបន្ថែម"}
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}