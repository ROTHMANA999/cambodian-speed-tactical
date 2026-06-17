import { createFileRoute } from "@tanstack/react-router";
import { Phone, Send, Facebook, MapPin, Mail, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact — CAMBODIAN SPEED ACCURATE TACTICAL CO., LTD.",
      },
      {
        name: "description",
        content: "Visit our Phnom Penh campus. Phone, Telegram, Facebook.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useI18n();

  const items = [
    { icon: Phone, label: t("contact.phone"), value: "+023 975 678", href: "tel:023 975 678" },
    { icon: Send, label: t("contact.telegram"), value: "@cambodiaspeek", href: "https://t.me/Combodia_ccc" },
    { icon: Facebook, label: t("contact.facebook"), value: "cambodiaspeek", href: "https://facebook.com" },
    { icon: Mail, label: "Email", value: "cambodianspeed@gmail.com", href: "mailto:cambodianspeed@gmail.com" },
    { icon: MapPin, label: t("contact.address"), value: "Street 271, Phnom Penh, Cambodia" },
    { icon: Clock, label: "Hours", value: "Mon — Sat · 8:00 — 17:00" },
  ];

  return (
    // 💡 កែប្រែ bg និង text ឱ្យគាំទ្រទាំង light និង dark mode
    <div className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-[#0a0f1d] text-slate-800 dark:text-white transition-colors duration-300">
      
      {/* BACKGROUND GRAPHICS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-yellow-500/10 blur-[150px]" />
        <div className="absolute top-1/3 right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-yellow-500/5 dark:bg-yellow-600/5 blur-[100px]" />
        
        {/* Subtle Grid overlay - ប្តូរពណ៌ខ្សែបន្ទាត់ទៅតាម mode */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container relative mx-auto px-6 py-20 lg:py-32">
        
        {/* HEADER SECTION */}
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-transparent px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-yellow-600 dark:text-yellow-400 backdrop-blur-md uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 dark:bg-yellow-400 animate-pulse" />
            {t("nav.contact")}
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-b from-slate-900 to-slate-700 dark:from-white dark:to-white/60 bg-clip-text text-transparent">
            {t("contact.title")}
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {t("contact.subtitle")}
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="mt-16 lg:mt-24 grid gap-8 lg:grid-cols-12 items-start">
          
          {/* LEFT CARDS */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {items.map((it) => {
              const CardContent = (
                // 💡 កែប្រែ Card ឱ្យប្តូរពណ៌ទៅជា slate-900/40 ពេលងងឹត
                <div className="h-full rounded-2xl border border-slate-200 dark:border-white/[0.06] bg-white/70 dark:bg-slate-900/40 p-5 backdrop-blur-xl shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-yellow-500/40 group-hover:bg-white dark:group-hover:bg-slate-900/80 group-hover:shadow-[0_10px_30px_-10px_rgba(234,179,8,0.2)] flex flex-col justify-between">
                  <div className="flex items-center gap-4">
                    {/* ICON CONTAINER */}
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/80 text-yellow-600 dark:text-yellow-400 transition-colors duration-300 group-hover:border-yellow-500/40 group-hover:bg-yellow-500 group-hover:text-white dark:group-hover:text-black group-hover:shadow-lg group-hover:shadow-yellow-500/20">
                      <it.icon className="h-5 w-5 stroke-[1.75]" />
                    </div>

                    {/* TEXT */}
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {it.label}
                      </div>
                      <div className="mt-0.5 truncate text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200 transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-white">
                        {it.value}
                      </div>
                    </div>
                  </div>
                </div>
              );

              return it.href ? (
                <a
                  key={it.label}
                  href={it.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-full select-none"
                >
                  {CardContent}
                </a>
              ) : (
                <div key={it.label} className="group h-full select-none cursor-default">
                  {CardContent}
                </div>
              );
            })}
          </div>

          {/* RIGHT MAP */}
          <div className="lg:col-span-5 h-full">
            <div className="relative group overflow-hidden rounded-2xl border border-slate-200 dark:border-white/[0.06] bg-white/70 dark:bg-slate-900/40 p-2 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40">
              {/* Subtle tech border effect around map */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.2454033911336!2d104.85519394070852!3d11.645490714435917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109530038cbee27%3A0x79b640d3fdfe5004!2z4Z6f4Z6Y4Z624Z6C4Z6Y4Z6T4Z-N4Z6Y4Z-J4Z624Z6H4Z68IOGek-GfheGegOGemOGfkuGeluGeu-Geh-Getg!5e0!3m2!1sen!2skh!4v1779351232256!5m2!1sen!2skh"
                // 💡 ប្រើ filter grayscale និង invert តែពេលស្ថិតក្នុង dark mode ប៉ុណ្ណោះ ដើម្បីឱ្យស្អាតទាំងសងខាង
                className="h-[350px] sm:h-[400px] lg:h-[430px] w-full rounded-xl transition-all duration-500 dark:grayscale dark:invert dark:contrast-[90%] dark:brightness-[95%] dark:group-hover:grayscale-0 dark:group-hover:invert-0"
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
