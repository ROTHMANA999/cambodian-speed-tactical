import { Shield, Flame, Plane, Languages, type LucideIcon } from "lucide-react";

export type Program = {
  slug: string;
  icon: LucideIcon;
  titleEn: string;
  titleKm: string;
  taglineEn: string;
  taglineKm: string;
  durationEn: string;
  durationKm: string;
  levelEn: string;
  levelKm: string;
  certificateEn: string;
  certificateKm: string;
  curriculumEn: string[];
  curriculumKm: string[];
  accent: string;
};

export const programs: Program[] = [
  {
    slug: "security",
    icon: Shield,
    titleEn: "Security Training",
    titleKm: "ការបណ្តុះបណ្តាលសន្តិសុខ",
    taglineEn: "Guard training, safety protection skills and emergency situation handling.",
    taglineKm: "បណ្តុះបណ្តាលឆ្មាំ ការការពារ និងស្ថានភាពអាសន្ន។",
    durationEn: "3 months",
    durationKm: "៣ ខែ",
    levelEn: "Beginner — Advanced",
    levelKm: "ដំបូង — កម្រិតខ្ពស់",
    certificateEn: "National Security Certificate",
    certificateKm: "វិញ្ញាបនបត្រសន្តិសុខជាតិ",
    curriculumEn: [
      "Security guard fundamentals & ethics",
      "Patrol techniques and access control",
      "Self-defense & restraint procedures",
      "Emergency response & first aid",
      "Surveillance and incident reporting",
    ],
    curriculumKm: [
      "មូលដ្ឋានគ្រឹះឆ្មាំសន្តិសុខ",
      "ការល្បាតនិងគ្រប់គ្រងច្រកចូល",
      "ការការពារខ្លួន និងបច្ចេកទេសឃាត់",
      "ការឆ្លើយតបអាសន្ននិងជំនួយដំបូង",
      "ការឃ្លាំមើល និងរាយការណ៍",
    ],
    accent: "from-blue-500 to-blue-700",
  },
  {
    slug: "firefighting",
    icon: Flame,
    titleEn: "Fire Fighting Training",
    titleKm: "ការបណ្តុះបណ្តាលពន្លត់អគ្គីភ័យ",
    taglineEn: "Fire prevention techniques, emergency rescue and safety equipment use.",
    taglineKm: "បច្ចេកទេសការពារអគ្គីភ័យ និងសង្គ្រោះអាសន្ន។",
    durationEn: "2 months",
    durationKm: "២ ខែ",
    levelEn: "All levels",
    levelKm: "គ្រប់កម្រិត",
    certificateEn: "Fire Safety Operator Certificate",
    certificateKm: "វិញ្ញាបនបត្រប្រតិបត្តិករសុវត្ថិភាពអគ្គីភ័យ",
    curriculumEn: [
      "Fire chemistry & behavior",
      "Hose, extinguisher and PPE operation",
      "Building evacuation procedures",
      "Rescue, search and casualty care",
      "Workplace fire risk assessment",
    ],
    curriculumKm: [
      "គីមីសាស្ត្រ និងឥរិយាបទនៃភ្លើង",
      "ការប្រើបំពង់ ឧបករណ៍ និង PPE",
      "នីតិវិធីជម្លៀសអគារ",
      "ការសង្គ្រោះ និងថែទាំជនរងគ្រោះ",
      "វាយតម្លៃហានិភ័យអគ្គីភ័យ",
    ],
    accent: "from-orange-500 to-red-600",
  },
  {
    slug: "drone",
    icon: Plane,
    titleEn: "Drone Training",
    titleKm: "ការបណ្តុះបណ្តាលផ្នែកដ្រូន",
    taglineEn: "Drone flying operation, aerial photography and drone technology.",
    taglineKm: "ប្រតិបត្តិការដ្រូន ការថតពីលើ និងបច្ចេកវិទ្យាដ្រូន។",
    durationEn: "6 weeks",
    durationKm: "៦ សប្តាហ៍",
    levelEn: "Beginner — Pro",
    levelKm: "ដំបូង — អាជីព",
    certificateEn: "UAV Pilot Certificate",
    certificateKm: "វិញ្ញាបនបត្រអ្នកបើកដ្រូន",
    curriculumEn: [
      "Drone hardware and flight controllers",
      "Manual & GPS-assisted flight",
      "Cinematic aerial photography & video",
      "Mission planning and mapping",
      "Aviation rules and safety",
    ],
    curriculumKm: [
      "ផ្នែករឹងដ្រូន និងប្រព័ន្ធគ្រប់គ្រង",
      "ការបើកដោយដៃ និង GPS",
      "ការថតពីលើខ្យល់សិល្បៈ",
      "ផែនការបេសកកម្ម និងផែនទី",
      "ច្បាប់អាកាសចរណ៍ និងសុវត្ថិភាព",
    ],
    accent: "from-sky-500 to-indigo-600",
  },
  {
    slug: "chinese",
    icon: Languages,
    titleEn: "Chinese Language",
    titleKm: "ថ្នាក់បង្រៀនភាសាចិន..",
    taglineEn: "Basic to advanced Chinese, business Chinese and HSK preparation.",
    taglineKm: "ភាសាចិនពីដំបូងដល់ខ្ពស់ ភាសាជំនួញ និងត្រៀម HSK។",
    durationEn: "4 — 12 months",
    durationKm: "៤ — ១២ ខែ",
    levelEn: "HSK 1 — 6",
    levelKm: "HSK ១ — ៦",
    certificateEn: "HSK Preparation Certificate",
    certificateKm: "វិញ្ញាបនបត្រត្រៀម HSK",
    curriculumEn: [
      "Pinyin, tones and pronunciation",
      "Daily conversation & writing",
      "Business Chinese vocabulary",
      "HSK 1–6 exam preparation",
      "Cultural immersion sessions",
    ],
    curriculumKm: [
      "ភីនអ៊ីន សំឡេង និងការបញ្ចេញសំឡេង",
      "សន្ទនាប្រចាំថ្ងៃ និងការសរសេរ",
      "វាក្យសព្ទជំនួញ",
      "ត្រៀមប្រឡង HSK ១–៦",
      "វប្បធម៌ចិន",
    ],
    accent: "from-amber-500 to-yellow-600",
  },
];
