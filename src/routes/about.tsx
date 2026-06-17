import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title:
          "About — CAMBODIAN SPEED ACCURATE TACTICAL CO., LTD.",
      },
      {
        name: "description",
        content:
          "A newly established vocational training institute in Cambodia focused on practical skills and professional development.",
      },
    ],
  }),
  component: About,
});

function About() {
  const { t, lang } = useI18n();

  const stats = [
    {
      value: "New",
      labelEn: "Established Institute",
      labelKm: "វិទ្យាស្ថានថ្មី",
    },
    {
      value: "5+",
      labelEn: "Training Programs",
      labelKm: "វគ្គបណ្តុះបណ្តាល",
    },
    {
      value: "Growing",
      labelEn: "Students Community",
      labelKm: "សិស្សកំពុងកើនឡើង",
    },
  ];

  const sections = [
    {
      title: lang === "en" ? "Our Mission" : "បេសកកម្មរបស់យើង",
      body:
        lang === "en"
          ? "To provide practical vocational training that helps students gain real-world skills, discipline, and career opportunities in Cambodia’s growing industries."
          : "ផ្តល់ការបណ្តុះបណ្តាលជំនាញអនុវត្ត ដើម្បីជួយសិស្សទទួលបានជំនាញពិត ការវិន័យ និងឱកាសការងារ នៅក្នុងឧស្សាហកម្មកំពុងរីកចម្រើននៅកម្ពុជា។",
    },
    {
      title: lang === "en" ? "Our Vision" : "ទស្សនវិស័យ",
      body:
        lang === "en"
          ? "To become a trusted emerging training institute that develops skilled, responsible, and job-ready youth."
          : "ក្លាយជាវិទ្យាស្ថានបណ្តុះបណ្តាលដែលទុកចិត្តបាន ក្នុងការអភិវឌ្ឍយុវជនឲ្យមានជំនាញ ទំនួលខុសត្រូវ និងត្រៀមខ្លួនសម្រាប់ការងារ។",
    },
    {
      title: lang === "en" ? "Our Campus" : "ទីតាំង និងបរិក្ខារ",
      body:
        lang === "en"
          ? "Our training center is currently developing modern classrooms and practical training spaces for security, drone operation, fire safety, and language learning."
          : "មជ្ឈមណ្ឌលបណ្តុះបណ្តាលកំពុងអភិវឌ្ឍថ្នាក់រៀនទំនើប និងទីកន្លែងអនុវត្តជាក់ស្តែងសម្រាប់សន្តិសុខ ដ្រូន ពន្លត់អគ្គិភ័យ និងភាសា។",
    },
    {
      title: lang === "en" ? "Our Approach" : "វិធីសាស្ត្រ",
      body:
        lang === "en"
          ? "We focus on hands-on learning, real practice, and discipline-based training rather than theory-only education."
          : "យើងផ្តោតលើការអនុវត្តជាក់ស្តែង វិន័យ និងការរៀនពីបទពិសោធន៍ពិត ជាងការសិក្សាទ្រឹស្តីតែមួយ។",
    },
  ];

  return (
    <div className="container mx-auto max-w-5xl px-4 py-20">

      {/* HEADER */}
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
        {t("nav.about")}
      </div>

      <h1 className="mt-4 text-4xl font-bold md:text-5xl">
        {t("about.title")}
      </h1>

      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        {t("about.body")}
      </p>

      {/* STATS */}
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.value}
            className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
          >
            <div className="text-3xl font-bold text-yellow-500">
              {s.value}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              {lang === "en" ? s.labelEn : s.labelKm}
            </div>
          </div>
        ))}
      </div>

      {/* CONTENT SECTIONS */}
      <div className="mt-14 space-y-10">
        {sections.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <h2 className="text-xl font-bold text-foreground">
              {s.title}
            </h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}