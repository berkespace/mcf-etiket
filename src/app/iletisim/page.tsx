import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { SidebarMenu } from "@/components/sidebar-menu";
import { QuoteForm } from "@/components/quote-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: "MCF Etiket fabrika iletişim bilgileri, adres, telefon ve fiyat teklif formu.",
};

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="İletişim ve Fiyat Teklifi"
        breadcrumb="İletişim"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Sol Kolon */}
          <div className="space-y-8 lg:col-span-8 xl:col-span-9 text-gray-700">
            {/* İletişim Bilgileri Kartı */}
            <div className="border border-gray-200 bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                Fabrika ve Genel Merkez İletişim
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide text-[#c61d23]">
                    İletişim & Satış Yetkilisi
                  </h3>
                  <p className="mt-1 text-base font-bold text-gray-900">
                    {site.contactPerson}
                  </p>
                  <p className="text-xs text-gray-500">Müşteri Temsilcisi & Satış Sorumlusu</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide text-[#c61d23]">
                    Telefon & WhatsApp Hattı
                  </h3>
                  <p className="mt-1">
                    <a href={`tel:${site.phoneRaw}`} className="text-base font-bold text-gray-900 hover:text-[#c61d23]">
                      {site.phone}
                    </a>
                  </p>
                  <p className="text-xs text-gray-500">Hızlı arama & WhatsApp mesajı için aktif</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide text-[#c61d23]">
                    Fabrika Adresi
                  </h3>
                  <p className="mt-1 text-gray-700 leading-relaxed">
                    {site.address}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide text-[#c61d23]">
                    Çalışma Saatleri
                  </h3>
                  <p className="mt-1 text-gray-700 leading-relaxed">
                    {site.workingHours}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide text-[#c61d23]">
                    E-Posta & Kurumsal Teklif
                  </h3>
                  <p className="mt-1">
                    <a href={`mailto:${site.email}`} className="font-semibold text-gray-900 hover:text-[#c61d23]">
                      {site.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap gap-3">
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold px-4 py-2.5 rounded-sm transition-colors"
                >
                  📞 Mustafa Güçlü: {site.phone}
                </a>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold px-4 py-2.5 rounded-sm transition-colors"
                >
                  💬 WhatsApp ile Yazın ({site.phone})
                </a>
              </div>
            </div>

            {/* Teklif Formu */}
            <QuoteForm />
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
