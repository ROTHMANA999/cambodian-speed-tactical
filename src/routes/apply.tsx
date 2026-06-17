import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react"; // បន្ថែម Loader2 សម្រាប់បង្ហាញពេលកំពុងរក្សាទុក
import { useI18n } from "@/lib/i18n";
import { programs } from "@/lib/programs";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";// <--- ១. Import supabase ចូលមកប្រើ

export const Route = createFileRoute("/apply")({
  head: () => ({ meta: [{ title: "Apply — CAMBODIAN SPEED ACCURATE TACTICAL CO., LTD." }, { name: "description", content: "Online registration form for CAMBODIAN SPEED ACCURATE TACTICAL CO., LTD. programs." }] }),
  component: Apply,
});

function Apply() {
  const { t, lang } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // <--- ២. បន្ថែម state សម្រាប់ loading
  const [errorMsg, setErrorMsg] = useState("");   // <--- ៣. បន្ថែម state សម្រាប់ចាប់ Error
  const [form, setForm] = useState({ name: "", email: "", phone: "", program: programs[0].slug, message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) return;

    setLoading(true);
    setErrorMsg("");

    try {
      // <--- ៤. កូដបញ្ជូនទិន្នន័យទៅកាន់ Supabase Database --->
      const { error } = await supabase
        .from("applications") // ត្រូវប្រាកដថាឈ្មោះ Table ដូចគ្នានៅក្នុង Supabase
        .insert([form]);

      if (error) {
        throw error;
      }

      setSubmitted(true); // បើជោគជ័យ បង្ហាញផ្ទាំង Success
    } catch (error: any) {
      setErrorMsg(error.message || "មានបញ្ហាបច្ចេកទេស មិនអាចរក្សាទុកទិន្នន័យបានទេ!");
      console.error("Error inserting data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-20">
      <div className="text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{t("cta.apply")}</div>
        <h1 className="mt-3 font-display text-5xl font-bold">{t("apply.title")}</h1>
        <p className="mt-4 text-muted-foreground">{t("apply.subtitle")}</p>
      </div>

      {submitted ? (
        <div className="mt-12 flex flex-col items-center gap-4 rounded-xl border border-gold/40 bg-gold/5 p-12 text-center">
          <CheckCircle2 className="h-12 w-12 text-gold" />
          <p className="font-display text-xl font-semibold">{t("apply.success")}</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-12 space-y-5 rounded-xl border border-border bg-card p-8">
          
          {/* ៥. បង្ហាញសារព្រមានបើមានកំហុស */}
          {errorMsg && (
            <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md border border-red-200">
              {errorMsg}
            </div>
          )}

          <Field label={t("apply.name")}>
            <input
              required maxLength={120} disabled={loading}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-gold focus:ring-2 disabled:opacity-50"
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={t("apply.email")}>
              <input
                required type="email" maxLength={200} disabled={loading}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-gold focus:ring-2 disabled:opacity-50"
              />
            </Field>
            <Field label={t("apply.phone")}>
              <input
                required type="tel" maxLength={30} disabled={loading}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-gold focus:ring-2 disabled:opacity-50"
              />
            </Field>
          </div>

          <Field label={t("apply.program")}>
            <select
              value={form.program} disabled={loading}
              onChange={(e) => setForm({ ...form, program: e.target.value })}
              className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-gold focus:ring-2 disabled:opacity-50"
            >
              {programs.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {lang === "en" ? p.titleEn : p.titleKm}
                </option>
              ))}
            </select>
          </Field>

          <Field label={t("apply.message")}>
            <textarea
              rows={4} maxLength={1000} disabled={loading}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-md border border-input bg-background p-3 text-sm outline-none ring-gold focus:ring-2 disabled:opacity-50"
            />
          </Field>

          {/* ៦. កែប្រែប៊ូតុងបង្ហាញការ Loading ពេលកំពុងចុចផ្ញើ */}
          <Button 
            type="submit" 
            size="lg" 
            disabled={loading}
            className="w-full bg-gold-gradient text-gold-foreground shadow-gold hover:opacity-90 flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {loading ? "កំពុងរក្សាទុក..." : t("apply.submit")}
          </Button>
        </form>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
      {children}
    </label>
  );
}