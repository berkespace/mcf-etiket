"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { useLanguage } from "@/lib/i18n";

export function ProductCatalog() {
  const { locale } = useLanguage();

  return (
    <div>
      {/* Ürün Kartları Izgarası (Screenshot Exact Card Layout) */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/urunler/${product.slug}`}
            className="group block border border-gray-200 bg-white transition hover:border-gray-300 hover:shadow-sm"
          >
            {/* Fotoğraf */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={locale === "en" ? product.titleEn : product.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Başlık Alanı (Aynı ekran görüntüsündeki gibi sade alt bar) */}
            <div className="bg-[#fcfcfc] border-t border-gray-100 py-3.5 px-3 text-center">
              <h2 className="text-[15px] font-bold text-gray-900 group-hover:text-[#c61d23] transition-colors">
                {locale === "en" ? product.titleEn : product.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
