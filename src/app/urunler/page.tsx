import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { SidebarMenu } from "@/components/sidebar-menu";
import { ProductCatalog } from "@/components/product-catalog";

export const metadata: Metadata = {
  title: "Ürünlerimiz",
  description: "Termal etiketler, kuşe etiketler, plastik bazlı etiketler ve barkod ribonları.",
};

export default function UrunlerPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Ürünlerimiz"
        breadcrumb="Ürünler"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Sol Kolon */}
          <div className="space-y-8 lg:col-span-8 xl:col-span-9">
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Endüstriyel Rulo ve Barkod Etiket Grupları
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Aşağıdaki ürünlerden ihtiyacınız olan grubu seçerek detaylı teknik özellikleri inceleyebilir ve sipariş için doğrudan iletişime geçebilirsiniz.
              </p>
            </div>

            <ProductCatalog />
          </div>

          {/* Sağ Kolon */}
          <div className="lg:col-span-4 xl:col-span-3">
            <SidebarMenu active="urunler" />
          </div>
        </div>
      </div>
    </main>
  );
}
