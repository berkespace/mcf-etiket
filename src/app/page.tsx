import { PageBanner } from "@/components/page-banner";
import { ProductCatalog } from "@/components/product-catalog";
import { SidebarMenu } from "@/components/sidebar-menu";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Üst Koyu Başlık ve Slogan (Çok Dilli / Multilingual) */}
      <PageBanner />

      {/* 2. Ana 2-Kolonlu Gövde Düzeni (Screenshot Exact UX Layout) */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Sol Kolon: Ürün Kartları */}
          <div id="urunler" className="space-y-8 lg:col-span-8 xl:col-span-9">
            <ProductCatalog />
          </div>

          {/* Sağ Kolon: Kırmızı MENÜ ve A Kalite Hammadde Kutusu */}
          <div className="lg:col-span-4 xl:col-span-3">
            <SidebarMenu />
          </div>
        </div>
      </div>
    </main>
  );
}
