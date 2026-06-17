import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "km";

const dict = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.programs": "Programs",
    "nav.gallery": "Gallery",
    "nav.news": "News",
    "nav.contact": "Contact",
    "cta.apply": "Apply Now",
    "cta.explore": "Explore Programs",
    "cta.learnMore": "Learn More",
    "hero.eyebrow": "Cambodia's Premier Vocational Institute",
    "hero.title": "Train. Protect. Lead.",
    "hero.subtitle": "Professional certification in Security, Fire Safety, Drone Operations and Chinese Language — taught by industry experts in Phnom Penh.",
    "hero.stat1": "Graduates",
    "hero.stat2": "Years",
    "hero.stat3": "Instructors",
    "programs.title": "Training Departments",
    "programs.subtitle": "Four specialized academies. One world-class campus.",
    "about.title": "A school built on discipline and trust",
    "about.body": "Founded to elevate Cambodia's professional workforce, our institute combines international curriculum with hands-on field training. Every program ends with certification recognized by national and regional employers.",
    "about.feature1.t": "Certified Curriculum",
    "about.feature1.d": "Aligned with ASEAN safety and trade standards.",
    "about.feature2.t": "Expert Instructors",
    "about.feature2.d": "Former officers, pilots, and language scholars.",
    "about.feature3.t": "Career Placement",
    "about.feature3.d": "Direct hiring partnerships with leading employers.",
    "gallery.title": "Real device images",
    "gallery.subtitle": "Inside the classrooms, on the field, and at graduation.",
    "testimonials.title": "What Our Graduates Say",
    "news.title": "News & Announcements",
    "contact.title": "Visit & Contact",
    "contact.subtitle": "We're open Monday to Saturday, 8:00 — 17:00",
    "contact.phone": "Phone",
    "contact.telegram": "Telegram",
    "contact.facebook": "Facebook",
    "contact.address": "Address",
    "apply.title": "Online Registration",
    "apply.subtitle": "Complete the form and our admissions team will contact you within 24 hours.",
    "apply.name": "Full Name",
    "apply.email": "Email",
    "apply.phone": "Phone Number",
    "apply.program": "Choose Program",
    "apply.message": "Message (optional)",
    "apply.submit": "Submit Application",
    "apply.success": "Application received. We'll be in touch shortly!",
    "footer.tagline": "Professional vocational training in Phnom Penh, Cambodia.",
    "footer.rights": "All rights reserved.",
    "course.curriculum": "Curriculum",
    "course.duration": "Duration",
    "course.level": "Level",
    "course.certificate": "Certificate",
  },
  km: {
    "nav.home": "ទំព័រដើម",
    "nav.about": "អំពីយើង",
    "nav.programs": "កម្មវិធីបណ្តុះបណ្តាល",
    "nav.gallery": "វិចិត្រសាល",
    "nav.news": "ព័ត៌មាន",
    "nav.contact": "ទំនាក់ទំនង",
    "cta.apply": "ចុះឈ្មោះឥឡូវ",
    "cta.explore": "មើលកម្មវិធី",
    "cta.learnMore": "ស្វែងយល់បន្ថែម",
    "hero.eyebrow": "វិទ្យាស្ថានបណ្តុះបណ្តាលឈានមុខគេនៅកម្ពុជា",
    "hero.title": "បណ្តុះ។ ការពារ។ ដឹកនាំ។",
    "hero.subtitle": "វិញ្ញាបនបត្រវិជ្ជាជីវៈ​ផ្នែកសន្តិសុខ, ការពារអគ្គីភ័យ, ប្រតិបត្តិការដ្រូន និងភាសាចិន — បង្រៀនដោយអ្នកជំនាញនៅរាជធានីភ្នំពេញ។",
    "hero.stat1": "និស្សិតបញ្ចប់",
    "hero.stat2": "ឆ្នាំ",
    "hero.stat3": "គ្រូបង្គោល",
    "programs.title": "នាយកដ្ឋានបណ្តុះបណ្តាល",
    "programs.subtitle": "បួនវិទ្យាស្ថានឯកទេស។ បរិវេណកម្រិតពិភពលោក។",
    "about.title": "សាលាដែលផ្អែកលើវិន័យ និងទំនុកចិត្ត",
    "about.body": "បង្កើតឡើងដើម្បីលើកកម្ពស់កម្លាំងពលកម្មកម្ពុជា វិទ្យាស្ថានរបស់យើងរួមបញ្ចូលកម្មវិធីសិក្សាអន្តរជាតិជាមួយការអនុវត្តជាក់ស្តែង។",
    "about.feature1.t": "កម្មវិធីសិក្សាមានវិញ្ញាបនបត្រ",
    "about.feature1.d": "ផ្អែកលើស្តង់ដារសន្តិសុខ ASEAN។",
    "about.feature2.t": "គ្រូបង្គោលជំនាញ",
    "about.feature2.d": "អតីតមន្ត្រី, អ្នកបើកដ្រូន និងសាស្ត្រាចារ្យភាសា។",
    "about.feature3.t": "ការងារបន្ទាប់ពីបញ្ចប់",
    "about.feature3.d": "ភាពជាដៃគូជាមួយក្រុមហ៊ុនធំៗ។",
    "gallery.title": "រូបភាពឧបករណ៍ពិត",
    "gallery.subtitle": "ក្នុងថ្នាក់រៀន លើទីលាន និងថ្ងៃប្រគល់សញ្ញាបត្រ។",
    "testimonials.title": "មតិរបស់និស្សិតបញ្ចប់ការសិក្សា",
    "news.title": "ព័ត៌មាន និងសេចក្តីប្រកាស",
    "contact.title": "ទស្សនកិច្ច និងទំនាក់ទំនង",
    "contact.subtitle": "បើកពីច័ន្ទ ដល់សៅរ៍ ម៉ោង ៨:០០ — ១៧:០០",
    "contact.phone": "ទូរស័ព្ទ",
    "contact.telegram": "តេលេក្រាម",
    "contact.facebook": "ហ្វេសប៊ុក",
    "contact.address": "អាសយដ្ឋាន",
    "apply.title": "ការចុះឈ្មោះអនឡាញ",
    "apply.subtitle": "បំពេញទម្រង់ ហើយក្រុមការងារយើងនឹងទាក់ទងក្នុង ២៤ ម៉ោង។",
    "apply.name": "ឈ្មោះពេញ",
    "apply.email": "អ៊ីមែល",
    "apply.phone": "លេខទូរស័ព្ទ",
    "apply.program": "ជ្រើសរើសកម្មវិធី",
    "apply.message": "សារ (ស្រេចចិត្ត)",
    "apply.submit": "ដាក់ស្នើ",
    "apply.success": "បានទទួលពាក្យ​សុំ។ យើងនឹងទាក់ទងវិញឆាប់ៗ!",
    "footer.tagline": "បណ្តុះបណ្តាលវិជ្ជាជីវៈនៅរាជធានីភ្នំពេញ កម្ពុជា។",
    "footer.rights": "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    "course.curriculum": "កម្មវិធីសិក្សា",
    "course.duration": "រយៈពេល",
    "course.level": "កម្រិត",
    "course.certificate": "វិញ្ញាបនបត្រ",
  },
} as const;

type Key = keyof typeof dict["en"];

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string }>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "km" || saved === "en") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  const t = (k: Key) => dict[lang][k] ?? k;
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
