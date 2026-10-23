import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK",
};

export default function KvkkPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-3xl text-neutral-900">KVKK Aydınlatma Metni</h1>
      <p className="mt-6 text-[15px] leading-7 text-muted">
        MCF Etiket, teklif ve iletişim formları üzerinden paylaşılan kişisel verileri
        yalnızca talebin yanıtlanması ve hizmet ilişkisinin yürütülmesi amacıyla işler.
        Verileriniz, yasal saklama süreleri dışında üçüncü kişilerle pazarlama amacıyla
        paylaşılmaz. Erişim, düzeltme ve silme talepleriniz için info@mcfetiket.com
        adresine yazabilirsiniz.
      </p>
    </main>
  );
}
