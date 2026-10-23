import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { SidebarMenu } from "@/components/sidebar-menu";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teknik Destek",
  description: "Barkod yazıcı termal kafa bakımı, kuka çapları ve ribon uyumluluk kılavuzları.",
};

export default function TeknikDestekPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Teknik Destek ve Kılavuzlar"
        breadcrumb="Teknik Destek"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Sol Kolon */}
          <div className="space-y-8 lg:col-span-8 xl:col-span-9 text-gray-700">
            {/* 1. Termal Kafa Bakımı */}
            <section id="termal-kafa" className="border border-gray-200 bg-white p-6 sm:p-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                Termal Yazıcı Kafa Temizliği ve Bakımı
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
                <p>
                  Barkod yazıcıların en maliyetli parçası <strong>termal kafa (printhead)</strong> bileşenidir. Doğru ve düzenli bakım ile kafa ömrünü 2 kata kadar uzatabilirsiniz:
                </p>
                <ul className="list-disc list-inside space-y-2 text-xs text-gray-700 pt-1">
                  <li>
                    <strong>İzopropil Alkol Kullanımı:</strong> Her rulo veya ribon değişiminde kafa yüzeyini %99 saf izopropil alkollü temizleme çubuğu veya pamuk ile tek yönde silin.
                  </li>
                  <li>
                    <strong>Doğru Koyu / Isı Ayarı:</strong> Yazıcının ısı (darkness) ayarını gereğinden yüksek tutmayın. Aşırı ısı, kafa piksellerinin erken yanmasına neden olur.
                  </li>
                  <li>
                    <strong>Ribon Genişliği Kuralı:</strong> Kullandığınız ribonun genişliği, etiket genişliğinden en az 4-5 mm daha geniş olmalıdır. Aksi halde etiketin kenarı çıplak kafaya sürterek aşındırma yapar.
                  </li>
                </ul>
              </div>
            </section>

            {/* 2. Kuka Çapı ve Sarım Yönü */}
            <section id="kuka-capi" className="border border-gray-200 bg-white p-6 sm:p-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                Doğru Kuka Çapı ve Sarım Yönü Seçimi
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="border border-gray-200 bg-gray-50/60 p-4">
                  <h3 className="font-bold text-gray-900 text-sm">Ø 40 mm Kuka (Masaüstü)</h3>
                  <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">
                    Zebra ZD serisi, TSC TE200, Argox OS serisi gibi kompakt masaüstü yazıcıların iç haznesi için uygundur. Genellikle 500 - 1.000 adetlik rulolar halinde sarılır.
                  </p>
                </div>
                <div className="border border-gray-200 bg-gray-50/60 p-4">
                  <h3 className="font-bold text-gray-900 text-sm">Ø 76 mm Kuka (Endüstriyel)</h3>
                  <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">
                    Zebra ZT serisi, TSC MH serisi gibi büyük endüstriyel yazıcılar ve otomatik etiketleme aplikatörleri için uygundur. 2.000 - 5.000 adetlik büyük çaplı rulolardır.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Ribon ve Etiket Uyumluluğu */}
            <section id="ribon-secimi" className="border border-gray-200 bg-white p-6 sm:p-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                Etiket Türüne Göre Doğru Ribon Seçimi
              </h2>
              <div className="mt-4 overflow-hidden border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                  <thead className="bg-gray-50 text-gray-700 font-semibold text-left">
                    <tr>
                      <th className="px-4 py-3">Etiket Türü</th>
                      <th className="px-4 py-3">Gerekli Ribon</th>
                      <th className="px-4 py-3">Dayanıklılık Derecesi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white text-gray-600">
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-900">Eco Termal & Lamine Termal</td>
                      <td className="px-4 py-3 text-red-600 font-medium">Ribon GEREKTİRMEZ</td>
                      <td className="px-4 py-3">Direkt Isı Duyarlı</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="px-4 py-3 font-semibold text-gray-900">Kuşe & Vellum Kağıt</td>
                      <td className="px-4 py-3">Wax Ribon veya Wax-Resin</td>
                      <td className="px-4 py-3">Standart Raf Ömrü</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-900">PP Opak / Sentetik Plastik</td>
                      <td className="px-4 py-3">Resin Ribon (D-Resin)</td>
                      <td className="px-4 py-3">Su, Yağ ve Kimyasala Dayanıklı</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="px-4 py-3 font-semibold text-gray-900">Tekstil Yıkama Talimatı</td>
                      <td className="px-4 py-3">Tekstil Resin Ribon</td>
                      <td className="px-4 py-3">Ağır Yıkama ve Kuru Temizleme</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Danışmanlık Kutusu */}
            <div className="border border-gray-200 bg-gray-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Hattınıza Uygun Etiketi Bulamadınız mı?</h3>
                <p className="mt-1 text-xs text-gray-600">
                  Yazıcı marka ve modelinizi bize iletin, en uygun etiket ve kuka ölçüsünü hemen belirleyelim.
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="bg-gray-900 text-white text-xs font-semibold px-4 py-2 rounded-sm"
                >
                  Ara: {site.phone}
                </a>
                <Link
                  href="/iletisim"
                  className="bg-[#c61d23] text-white text-xs font-semibold px-4 py-2 rounded-sm"
                >
                  Teklif İste
                </Link>
              </div>
            </div>
          </div>

          {/* Sağ Kolon */}
          <div className="lg:col-span-4 xl:col-span-3">
            <SidebarMenu active="teknik-destek" />
          </div>
        </div>
      </div>
    </main>
  );
}
