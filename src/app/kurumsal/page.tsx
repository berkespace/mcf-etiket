import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { SidebarMenu } from "@/components/sidebar-menu";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kurumsal & Üretim Parkuru - KARDEŞLER KAĞIT AMB. SAN. TİC. LTD. ŞTİ.",
  description:
    "KARDEŞLER KAĞIT AMB. SAN. TİC. LTD. ŞTİ. ve MCF Etiket kurumsal profili, flekso baskı hatları, Antalya Kepez üretim tesisi ve Avrupa menşeli A kalite hammadde standartları.",
  keywords: [
    "kurumsal etiket üreticisi",
    "mcf etiket hakkında",
    "kardeşler kağıt antalya",
    "flekso baskı etiket",
    "ambalaj sanayi antalya",
    "etiket üretim parkuru",
    "etiket fabrikası kepez",
  ],
  openGraph: {
    title: "Kurumsal Profil | MCF Etiket - KARDEŞLER KAĞIT",
    description: "Antalya Kepez tesislerimizde flekso baskı ve rulo etiket üretim standartlarımız.",
    images: ["/images/og-image.jpg"],
  },
};

export default function KurumsalPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Kurumsal"
        breadcrumb="Kurumsal » Hakkımızda"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Sol Kolon */}
          <div className="space-y-8 lg:col-span-8 xl:col-span-9 text-gray-700">
            {/* Şirket Tanıtımı */}
            <section className="border border-gray-200 bg-white p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                Hakkımızda
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed">
                <p>
                  <strong>KARDEŞLER KAĞIT AMB. SAN. TİC. LTD. ŞTİ.</strong> bünyesinde faaliyet gösteren <strong>MCF Etiket</strong>, barkod etiketleri, baskılı ve baskısız rulo etiketler ile termal transfer ribon alanında endüstriyel üretim yapan öncü bir ambalaj ve etiketleme kuruluşudur.
                </p>
                <p>
                  Antalya Kepez’deki modern tesisimizde; gıda, lojistik, kimya, tekstil, sağlık ve perakende sektörleri başta olmak üzere Türkiye genelinde yüzlerce kurumsal firmaya çözüm ortaklığı sunuyoruz.
                </p>
              </div>

              <div className="mt-6 relative aspect-[16/9] w-full overflow-hidden border border-gray-200 bg-gray-100">
                <Image
                  src="/images/hero-label-scene.jpg"
                  alt="MCF Etiket Üretim Tesisi"
                  fill
                  className="object-cover"
                />
              </div>
            </section>

            {/* Üretim Parkuru */}
            <section className="border border-gray-200 bg-white p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                Üretim Parkurumuz & Kapasite
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed">
                <p>
                  Üretim tesisimiz, yüksek hızlı çok renkli flekso baskı makineleri, milimetrik lazer kontrollü döner kesim ve otomatik gergi kontrollü dilme üniteleri ile donatılmıştır.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="border border-gray-200 bg-gray-50/60 p-4">
                    <h3 className="font-bold text-gray-900 text-sm">Flekso Baskı</h3>
                    <p className="mt-1 text-xs text-gray-600">
                      6 renge kadar yüksek çözünürlüklü UV ve su bazlı canlı baskı hatları.
                    </p>
                  </div>
                  <div className="border border-gray-200 bg-gray-50/60 p-4">
                    <h3 className="font-bold text-gray-900 text-sm">Hassas Dilme</h3>
                    <p className="mt-1 text-xs text-gray-600">
                      Sıfır toz, çapaksız ve yazıcı kafasını tıkamayan milimetrik kuka sarımı.
                    </p>
                  </div>
                  <div className="border border-gray-200 bg-gray-50/60 p-4">
                    <h3 className="font-bold text-gray-900 text-sm">Geniş Bıçak Arşivi</h3>
                    <p className="mt-1 text-xs text-gray-600">
                      Yüzlerce hazır ölçü kalıbı sayesinde kalıp masrafı olmadan hızlı üretim.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Kalite ve Hammadde Standartları */}
            <section id="hammadde-kalite" className="border border-gray-200 bg-white p-6 sm:p-8 border-l-4 border-l-[#ff6d00]">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                A Kalite Hammadde ve Sertifikasyon
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed">
                <p>
                  Üretimlerimizde yalnızca Avrupa menşeli, uluslararası kabul görmüş birinci sınıf hammadde üreticilerinin (Fasson, Raflatac vb.) sertifikalı kağıt ve tutkal çözümlerini kullanmaktayız.
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-700 pt-2">
                  <li><strong>FSC® Sertifikası:</strong> Sürdürülebilir orman kaynaklarından elde edilen çevre dostu taşıyıcılar.</li>
                  <li><strong>Gıdaya Uygunluk (ISEGA / FDA):</strong> Direkt veya dolaylı gıda temasına uygun tutkal ve hammadde.</li>
                  <li><strong>Yapışkan Alternatifleri:</strong> Standart akrilik, güçlü hotmelt, derin dondurucu ve sökülebilir (nonperm) tutkal.</li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
                <Link
                  href="/iletisim"
                  className="bg-[#e69222] hover:bg-[#cf7e17] text-white text-xs font-semibold px-5 py-2.5 rounded-sm transition-colors shadow-sm"
                >
                  İletişime Geçin
                </Link>
              </div>
            </section>
          </div>

          {/* Sağ Kolon: MENÜ ve A Kalite Hammadde Kutusu */}
          <div className="lg:col-span-4 xl:col-span-3">
            <SidebarMenu active="hakkimizda" />
          </div>
        </div>
      </div>
    </main>
  );
}
