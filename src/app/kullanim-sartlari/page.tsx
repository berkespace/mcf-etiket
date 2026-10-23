import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-3xl text-neutral-900">Kullanım Şartları</h1>
      <p className="mt-6 text-[15px] leading-7 text-muted">
        Bu sitedeki ürün görselleri ve teknik açıklamalar bilgilendirme amaçlıdır.
        Kesin ölçü, malzeme ve teslim süresi teklif onayıyla belirlenir. Site içeriği
        MCF Etiket&apos;e aittir; izinsiz kopyalanamaz.
      </p>
    </main>
  );
}
