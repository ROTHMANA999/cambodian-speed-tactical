import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

// 👉 import images
import shirtImg from "@/assets/logoman.jpg";
import carImg from "@/assets/logocar1.png";
import carImg2 from "@/assets/logocar3.png";
import carImg3 from "@/assets/logocar5.png";
import carImg4 from "@/assets/logocar7.png";
import motoImg from "@/assets/logomoto.png";
import helmetImg from "@/assets/logohat.png";
import helmetImg2 from "@/assets/logohat2.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      {
        title: "Gallery — CAMBODIAN SPEED ACCURATE TACTICAL CO., LTD.",
      },
      {
        name: "description",
        content:
          "Training equipment and student activities at CAMBODIAN SPEED ACCURATE TACTICAL CO., LTD.",
      },
    ],
  }),
  component: Gallery,
});

const items = [
  { label: "Company Car", img: carImg },
  { label: "Company Car", img: carImg2 },
  { label: "Company Car", img: carImg3 },
  { label: "Company Car", img: carImg4 },
  { label: "Uniform (Shirt)", img: shirtImg },
  { label: "Motorbike Training", img: motoImg },
  { label: "Safety Helmet", img: helmetImg },
  { label: "Safety Helmet", img: helmetImg2 },
];

function Gallery() {
  const { t } = useI18n();

  return (
    <div className="container mx-auto px-4 py-20">

      {/* HEADER */}
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-500">
          {t("nav.gallery")}
        </div>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          {t("gallery.title")}
        </h1>

        <p className="mt-4 text-muted-foreground">
          {t("gallery.subtitle")}
        </p>
      </div>

      {/* GRID */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {items.map((it) => (
          <div
            key={it.label}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* IMAGE */}
            <div className="aspect-square overflow-hidden">
              <img
                src={it.img}
                alt={it.label}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* TEXT */}
            <div className="absolute bottom-0 p-4 text-white">
              <div className="text-lg font-bold">
                {it.label}
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}