import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Clock,
  Award,
  GraduationCap,
} from "lucide-react";

import { useI18n } from "@/lib/i18n";
import { programs } from "@/lib/programs";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = programs.find((p) => p.slug === params.slug);
    if (!program) throw notFound();
    return { slug: program.slug };
  },

  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold">Program not found</h1>
      <Link
        to="/programs"
        className="mt-4 inline-block text-yellow-500 underline"
      >
        Back to programs
      </Link>
    </div>
  ),

  errorComponent: ({ error }) => (
    <div className="container mx-auto px-4 py-24 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),

  component: ProgramDetail,
});

function ProgramDetail() {
  const { slug } = Route.useParams();
  const { t, lang } = useI18n();

  const program = programs.find((p) => p.slug === slug)!;
  const Icon = program.icon;

  return (
    <>
      {/* HERO */}
      <section className="bg-[#071120] text-white">
        <div className="container mx-auto px-4 py-20">

          <Link
            to="/programs"
            className="text-sm text-white/70 hover:text-yellow-400"
          >
            ← {t("nav.programs")}
          </Link>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center">

            {/* ICON */}
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-yellow-500 text-black shadow-lg">
              <Icon className="h-8 w-8" />
            </div>

            {/* TITLE */}
            <div>
              <h1 className="text-4xl font-bold md:text-6xl">
                {lang === "en"
                  ? program.titleEn
                  : program.titleKm}
              </h1>

              <p className="mt-3 max-w-2xl text-white/70 leading-8">
                {lang === "en"
                  ? program.taglineEn
                  : program.taglineKm}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto grid gap-10 px-4 py-16 lg:grid-cols-3">

        {/* LEFT */}
        <div className="lg:col-span-2">

          <h2 className="text-3xl font-bold">
            {t("course.curriculum")}
          </h2>

          <div className="mt-6 space-y-4">
            {(lang === "en"
              ? program.curriculumEn
              : program.curriculumKm
            ).map((c) => (
              <div
                key={c}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-yellow-500 text-black">
                  <Check className="h-4 w-4" />
                </div>

                <p className="leading-7 text-foreground">
                  {c}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">

            <h3 className="text-lg font-bold mb-6">
              Course Details
            </h3>

            <div className="space-y-5">

              <Info
                icon={Clock}
                label={t("course.duration")}
                value={
                  lang === "en"
                    ? program.durationEn
                    : program.durationKm
                }
              />

              <Info
                icon={GraduationCap}
                label={t("course.level")}
                value={
                  lang === "en"
                    ? program.levelEn
                    : program.levelKm
                }
              />

              <Info
                icon={Award}
                label={t("course.certificate")}
                value={
                  lang === "en"
                    ? program.certificateEn
                    : program.certificateKm
                }
              />
            </div>

            <Button
              asChild
              className="mt-8 w-full bg-yellow-500 text-black hover:bg-yellow-400"
            >
              <Link to="/apply">
                {t("cta.apply")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </aside>
      </section>
    </>
  );
}

/* INFO COMPONENT */
function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-yellow-500/10 text-yellow-500">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <div className="text-xs uppercase tracking-wide text-muted-foreground">
          {label}
        </div>
        <div className="font-semibold leading-6">
          {value}
        </div>
      </div>
    </div>
  );
}