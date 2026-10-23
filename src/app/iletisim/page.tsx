import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { SidebarMenu } from "@/components/sidebar-menu";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim & Fabrika Adresi - KARDEŞLER KAĞIT AMB. SAN. TİC. LTD. ŞTİ.",
  description:
    "KARDEŞLER KAĞIT AMB. SAN. TİC. LTD. ŞTİ. - MCF Etiket fabrika iletişim bilgileri, Altayak Mahallesi Kepez / Antalya adresimiz, doğrudan telefon +90 534 209 88 01 ve WhatsApp hattı.",
  keywords: [
    "mcf etiket iletişim",
    "kardeşler kağıt telefon",
    "antalya etiket fabrikası adres",
    "mustafa güçlü iletişim",
    "kepez etiket sipariş",
    "etiket fiyat bilgisi",
  ],
  openGraph: {
    title: "İletişim | MCF Etiket - KARDEŞLER KAĞIT",
    description: "Kepez Antalya fabrika adresi ve doğrudan iletişim hattı: +90 534 209 88 01.",
    images: ["/images/og-image.jpg"],
  },
};

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="İletişim"
        breadcrumb="İletişim"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Sol Kolon */}
          <div className="space-y-8 lg:col-span-8 xl:col-span-9 text-gray-700">
            {/* İletişim Bilgileri Kartı */}
            <div className="border border-gray-200 bg-white p-6 sm:p-8">
              <div className="border-b border-gray-200 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#e69222]">
                  Resmi Firma Bilgileri
                </span>
                <h1 className="mt-1 text-xl sm:text-2xl font-bold text-gray-900">
                  {site.companyTitle}
                </h1>
                <p className="mt-1 text-xs text-gray-500">
                  MCF Etiket ve Barkod Çözümleri Üretim Tesisi
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide text-[#e69222]">
                    İletişim & Yetkili
                  </h3>
                  <p className="mt-1 text-base font-bold text-gray-900">
                    {site.contactPerson}
                  </p>
                  <p className="text-xs text-gray-500">Müşteri Temsilcisi & Satış Sorumlusu</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide text-[#e69222]">
                    Telefon & WhatsApp Hattı
                  </h3>
                  <p className="mt-1">
                    <a href={`tel:${site.phoneRaw}`} className="text-base font-bold text-gray-900 hover:text-[#e69222]">
                      {site.phone}
                    </a>
                  </p>
                  <p className="text-xs text-gray-500">Hızlı arama & WhatsApp mesajı için 7/24 aktif</p>
                </div>

                <div className="sm:col-span-2 border-t border-gray-100 pt-4">
                  <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide text-[#e69222]">
                    Fabrika & Genel Merkez Adresi
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-900 leading-relaxed">
                    {site.address}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide text-[#e69222]">
                    Çalışma Saatleri
                  </h3>
                  <p className="mt-1 text-gray-700 leading-relaxed">
                    {site.workingHours}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide text-[#e69222]">
                    Kurumsal E-Posta
                  </h3>
                  <p className="mt-1">
                    <a href={`mailto:${site.email}`} className="font-semibold text-gray-900 hover:text-[#e69222]">
                      {site.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-3">
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-5 py-3 rounded-sm transition-colors"
                >
                  📞 Hemen Arayın: {site.phone}
                </a>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-semibold px-5 py-3 rounded-sm transition-colors"
                >
                  💬 WhatsApp ile İletişime Geçin
                </a>
              </div>
            </div>

            {/* Doğrudan İletişim Bilgilendirme Kartı */}
            <div className="border border-gray-200 bg-gray-50/70 p-6 sm:p-8">
              <h3 className="text-base font-bold text-gray-900">
                Sipariş ve Danışmanlık
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Tüm baskılı/baskısız rulo etiket, ribon ve özel ölçü talepleriniz için doğrudan yetkilimiz <strong>{site.contactPerson}</strong> ile <strong>{site.phone}</strong> telefon numarası veya WhatsApp hattımız üzerinden irtibata geçebilirsiniz.
              </p>
            </div>
          </div>

          {/* Sağ Kolon */}
          <div className="lg:col-span-4 xl:col-span-3">
            <SidebarMenu active="iletisim" />
          </div>
        </div>
      </div>
    </main>
  );
}
