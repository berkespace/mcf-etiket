import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK",
};

export default function KvkkPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-3xl text-neutral-900">KVKK Aydınlatma Metni</h1>
      <p className="mt-6 text-[15px] leading-7 text-muted">
        KARDEŞLER KAĞIT AMB. SAN. TİC. LTD. ŞTİ. (MCF Etiket), iletişim ve sipariş kanalları üzerinden paylaşılan kişisel verileri
        yalnızca talebin yanıtlanması ve hizmet ilişkisinin yürütülmesi amacıyla işler.
        Verileriniz, yasal saklama süreleri dışında üçüncü kişilerle pazarlama amacıyla
        paylaşılmaz. Erişim, düzeltme ve silme talepleriniz için info@mcfetiket.com
        adresine veya Altayak Mahallesi 8192 Sokak Ertuğrul Gazi Caddesi No:11, 07250 Kepez / Antalya adresimize yazabilirsiniz.
      </p>
    </main>
  );
}
