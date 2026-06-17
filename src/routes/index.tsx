import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  ShieldCheck,
  Users,
  Quote,
  Calendar,
  CheckCircle2,
} from "lucide-react";

import heroImage from "@/assets/hero.jpg";
import directorImage from "@/assets/director.jpg";

import { useI18n } from "@/lib/i18n";
import { programs } from "@/lib/programs";

import { ProgramCard } from "@/components/site/ProgramCard";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "CAMBODIAN SPEED ACCURATE TACTICAL CO., LTD.",
      },
      {
        name: "description",
        content: "Vocational training institute in Cambodia.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, lang } = useI18n();

  const news = [
    {
      date: "មានក្នុងពេលឈាប់ៗ",
      title:
        lang === "en"
          ? "New training courses available"
          : "វគ្គបណ្តុះបណ្តាលថ្មី",
    },
    {
      date: "មានក្នុងពេលឈាប់ៗ",
      title:
        lang === "en"
          ? "Student registration now open"
          : "បើកទទួលសិស្សថ្មី",
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#071120] text-white">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            className="h-full w-full object-cover opacity-25"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />

        <div className="container relative mx-auto grid min-h-[90vh] items-center gap-16 px-4 py-20 md:grid-cols-2">
          
          {/* LEFT */}
          <div>
            <span className="inline-flex rounded-full bg-yellow-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
              {t("hero.eyebrow")}
            </span>

            <h1 className="mt-8 text-5xl font-extrabold md:text-7xl">
              {t("hero.title")}
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/75">
              {t("hero.subtitle")}
            </p>

            <div className="mt-10 flex gap-5">
              <Button asChild size="lg" className="bg-yellow-500 text-black">
                <Link to="/apply">
                  {t("cta.apply")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <Link to="/programs">{t("cta.explore")}</Link>
              </Button>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-5">
              {[
                ["4+", lang === "en" ? "Courses" : "វគ្គសិក្សា"],
                ["10+", lang === "en" ? "Teachers" : "គ្រូបង្រៀន"],
                ["100+", lang === "en" ? "Students" : "សិស្ស"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                >
                  <div className="text-3xl font-bold text-yellow-400">
                    {n}
                  </div>
                  <div className="mt-2 text-sm text-white/70">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:block">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
              <h3 className="text-3xl font-bold">
                {lang === "en"
                  ? "Welcome To Our Institute"
                  : "ស្វាគមន៍មកកាន់វិទ្យាស្ថាន"}
              </h3>

              <p className="mt-5 text-white/70">
                {lang === "en"
                  ? "We provide vocational training programs."
                  : "យើងផ្តល់វគ្គបណ្តុះបណ្តាលជំនាញវិជ្ជាជីវៈ។"}
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Security Training",
                  "Fire Safety",
                  "Drone",
                  "Chinese Language",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="container mx-auto px-4 py-28">
        <div className="text-center">
          <h2 className="text-4xl font-bold">{t("programs.title")}</h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-secondary/40">
  <div className="container mx-auto grid gap-16 px-4 py-28 md:grid-cols-2">

    {/* LEFT */}
    <div>
      <h2 className="text-4xl font-bold">
        {t("about.title")}
      </h2>

      <p className="mt-6 text-muted-foreground">
        {t("about.body")}
      </p>
    </div>

    {/* RIGHT */}
    <div className="space-y-5">
      {[
        {
          icon: Award,
          title: t("about.feature1.t"),
          desc: t("about.feature1.d"),
        },
        {
          icon: ShieldCheck,
          title: t("about.feature2.t"),
          desc: t("about.feature2.d"),
        },
        {
          icon: Users,
          title: t("about.feature3.t"),
          desc: t("about.feature3.d"),
        },
      ].map((item) => (
        <div
          key={item.title}
          className="flex gap-5 rounded-2xl border bg-card p-6 transition hover:shadow-lg"
        >
          <item.icon className="h-8 w-8 text-yellow-500" />

          <div>
            <div className="font-bold">
              {item.title}
            </div>

            <div className="text-sm text-muted-foreground">
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ================= DIRECTOR ================= */}
      <section className="container mx-auto px-4 py-28">
  <div className="grid overflow-hidden rounded-3xl border bg-card md:grid-cols-2">

    <img
      src={directorImage}
      alt="General Director"
      className="h-full w-full object-cover"
    />

    <div className="flex flex-col justify-center p-10">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
        {lang === "en" ? "Leadership Message" : "សារដឹកនាំ"}
      </h3>

      <h2 className="mt-4 text-3xl font-bold text-foreground">
        {lang === "en" ? "Message From Director" : "សារពីអគ្គនាយក"}
      </h2>

      {/* ខ្លឹមសារត្រូវបានបំពេញនៅត្រង់នេះ */}
      <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
        {lang === "en" ? (
          <>
            <p>
              Welcome to our institute. We are dedicated to providing market-driven professional training across three core pillars: <strong>Security & Fire Fighting</strong>, <strong>Drone Technology</strong>, and <strong>Business Chinese</strong>.
            </p>
            <p>
              Our mission is to empower students with practical, real-world skills and advanced technology, ensuring you are fully equipped for high-demand careers and future success.
            </p>
          </>
        ) : (
          <>
            <p>
              សូមស្វាគមន៍មកកាន់វិទ្យាស្ថានរបស់យើង។ យើងប្តេជ្ញាផ្តល់ជូននូវការបណ្តុះបណ្តាលជំនាញច្បាស់លាស់ស្របតាមតម្រូវការទីផ្សារការងារលើវិស័យគន្លឹះទាំង ៣ រួមមាន៖ <strong>សន្តិសុខ និងពន្លត់អគ្គិភ័យ</strong>, <strong>បច្ចេកវិទ្យាដ្រូន</strong> និង <strong>ភាសាចិនពាណិជ្ជកម្ម</strong>។
            </p>
            <p>
              បេសកកម្មរបស់យើងគឺការបណ្តុះជំនាញពិត និងការអនុវត្តផ្ទាល់ជាមួយបច្ចេកវិទ្យាទំនើប ដើម្បីធានាថា សិក្ខាកាមគ្រប់រូបទទួលបានឱកាសការងារខ្ពស់ និងភាពជោគជ័យក្នុងអាជីព។
            </p>
          </>
        )}
      </div>

      <Quote className="mt-6 h-8 w-8 text-yellow-500" />

      <div className="mt-8">
        <div className="text-lg font-bold text-foreground">
          {lang === "en" ? "General Director" : "អគ្គនាយក"}
        </div>
        <p className="text-sm text-muted-foreground">
          {lang === "en" ? "CAMBODIAN SPEED ACCURATE TACTIALCO.,LTD" : "ខេមបូឌាន ស្ពីជ អាកឃ្យូរ៉េត​ ថាកថៀល ឯ.ក"}
        </p>
      </div>
    </div>
    
  </div>
</section>

      {/* ================= NEWS ================= */}
      <section className="bg-secondary/40">
        <div className="container mx-auto px-4 py-28">
          <h2 className="text-center text-4xl font-bold">
            {t("news.title")}
          </h2>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {news.map((n) => (
              <div
                key={n.date}
                className="flex items-center justify-between rounded-xl border bg-card p-4"
              >
                <span className="text-sm text-muted-foreground">
                  {n.date}
                </span>
                <span className="font-medium">{n.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="container mx-auto px-4 py-28">
        <div className="rounded-3xl bg-[#071120] p-16 text-center text-white">
          <h2 className="text-4xl font-bold">
            Start Your Learning Journey
          </h2>

          <Button asChild className="mt-8 bg-yellow-500 text-black">
            <Link to="/apply">{t("cta.apply")}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}