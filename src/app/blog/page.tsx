import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { SidebarMenu } from "@/components/sidebar-menu";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Etiket türleri, barkod yazıcı bakımı ve ambalaj sektörü teknik makaleleri.",
};

const articles = [
  {
    title: "Eco Termal ve Lamine Termal Etiket Arasındaki Farklar",
    date: "14 Ekim 2026",
    category: "Termal Etiket",
    summary:
      "Kısa süreli kargo gönderileri ile uzun süreli soğuk zincir ve medikal depolama süreçlerinde doğru etiket türü nasıl seçilir? Koruyucu lak kaplamanın avantajları.",
  },
  {
    title: "Barkod Yazıcı Termal Kafa Ömrünü Uzatmanın 5 Etkili Yolu",
    date: "02 Ekim 2026",
    category: "Teknik Servis",
    summary:
      "Zebra, TSC ve Honeywell yazıcılarda kafa çizilmelerini önleme, saf alkol temizliği ve doğru ribon genişliği ayarlarıyla bakım maliyetlerini düşürme yöntemleri.",
  },
  {
    title: "Kuşe Etiketlerde Wax mı, Wax-Resin Ribon mu Kullanılmalı?",
    date: "21 Eylül 2026",
    category: "Ribon Rehberi",
    summary:
      "Yarı parlak kuşe kağıt yüzeylerde barkod okunabilirliği, sürtünme direnci ve maliyet optimizasyonu açısından ribon formülasyonlarının karşılaştırılması.",
  },
  {
    title: "Derin Dondurucu ve Nemli Ortamlar İçin Hotmelt Tutkal Seçimi",
    date: "05 Eylül 2026",
    category: "Hammadde & Tutkal",
    summary:
      "-18°C ve -40°C soğuk zincir lojistiğinde standart akrilik yapışkanların neden yetersiz kaldığı ve deepfreeze hotmelt yapıştırıcıların özellikleri.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Blog ve Sektörel Bilgiler"
        breadcrumb="Blog"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Sol Kolon */}
          <div className="space-y-6 lg:col-span-8 xl:col-span-9">
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Sektörel Rehberler ve Teknik Makaleler
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Üretim hattınızda ve depolama süreçlerinizde doğru malzeme seçimi yapmanıza yardımcı olacak teknik içerikler.
              </p>
            </div>

            <div className="space-y-4">
              {articles.map((art) => (
                <article
                  key={art.title}
                  className="border border-gray-200 bg-white p-6 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="font-semibold text-[#e69222]">{art.category}</span>
                    <span>•</span>
                    <span>{art.date}</span>
                  </div>
                  <h3 className="mt-2 text-base sm:text-lg font-bold text-gray-900 hover:text-[#e69222] transition-colors">
                    {art.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {art.summary}
                  </p>
                </article>
              ))}
            </div>

            <div className="border border-gray-200 bg-gray-50 p-6 text-center">
              <p className="text-sm font-semibold text-gray-800">
                Özel bir teknik konu veya etiketleme ihtiyacınız için uzmanımıza danışabilirsiniz.
              </p>
              <Link
                href="/iletisim"
                className="mt-3 inline-block bg-[#e69222] hover:bg-[#cf7e17] text-white text-xs font-semibold px-5 py-2.5 rounded-sm transition-colors shadow-sm"
              >
                Bizimle İletişime Geçin
              </Link>
            </div>
          </div>

          {/* Sağ Kolon */}
          <div className="lg:col-span-4 xl:col-span-3">
            <SidebarMenu active="blog" />
          </div>
        </div>
      </div>
    </main>
  );
}
