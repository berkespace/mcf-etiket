import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PageBanner } from "@/components/page-banner";
import { SidebarMenu } from "@/components/sidebar-menu";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.title} - Rulo Etiket Çözümleri`,
    description: `${product.description} İstenen ölçü, kuka çapı ve adette hızlı üretim. KARDEŞLER KAĞIT AMB. SAN. TİC. LTD. ŞTİ. - Kepez / Antalya.`,
    keywords: [
      product.title,
      product.categoryLabel,
      "rulo etiket",
      "barkod etiketi",
      "etiket üretimi antalya",
      "mcf etiket",
      "kardeşler kağıt",
    ],
    openGraph: {
      title: `${product.title} | MCF Etiket - KARDEŞLER KAĞIT`,
      description: `${product.description} İstenen ölçü ve adette üretim.`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | MCF Etiket`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title={product.title}
        breadcrumb={`Ürünler » ${product.title}`}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Sol Kolon */}
          <div className="space-y-8 lg:col-span-8 xl:col-span-9 text-gray-700">
            {/* Ürün Görseli ve Genel Açıklama */}
            <div className="border border-gray-200 bg-white p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-gray-200 bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-semibold text-[#e69222] uppercase tracking-wide">
                    {product.categoryLabel}
                  </span>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {product.title}
                  </h1>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="pt-3 flex flex-wrap gap-2">
                    <a
                      href={site.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold px-4 py-2.5 rounded-sm transition-colors"
                    >
                      💬 WhatsApp ile Sipariş Ver
                    </a>
                    <a
                      href={`tel:${site.phoneRaw}`}
                      className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold px-4 py-2.5 rounded-sm transition-colors"
                    >
                      <span>📞 {site.contactPerson}: {site.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Teknik Özellikler Tablosu */}
            <div className="border border-gray-200 bg-white p-6 sm:p-8">
              <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-3">
                Teknik Özellikler
              </h2>
              <div className="mt-4 overflow-hidden border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {product.specs.map((spec) => (
                      <tr key={spec.label} className="odd:bg-gray-50/60">
                        <td className="px-4 py-3 font-semibold text-gray-800 w-1/3">
                          {spec.label}
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Kullanım Alanları */}
            <div className="border border-gray-200 bg-white p-6 sm:p-8">
              <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-3">
                Önerilen Kullanım Alanları
              </h2>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-gray-700">
                {product.applications.map((app) => (
                  <li key={app} className="flex items-center gap-2">
                    <span className="text-[#e69222]">✔</span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Doğrudan Sipariş ve Danışmanlık */}
            <div className="border border-gray-200 bg-gray-50/70 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-gray-900 text-sm">{product.title} Siparişi ve Bilgi</h3>
                <p className="mt-1 text-xs text-gray-600">
                  İstediğiniz ölçü, kuka çapı ve adet için doğrudan yetkilimiz {site.contactPerson} ile görüşebilirsiniz.
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold px-4 py-2 rounded-sm transition-colors"
                >
                  📞 {site.phone}
                </a>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold px-4 py-2 rounded-sm transition-colors"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
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
