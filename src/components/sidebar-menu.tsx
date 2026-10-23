"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/lib/products";
import { useLanguage } from "@/lib/i18n";

interface SidebarMenuProps {
  active?: "hakkimizda" | "urunler" | "teknik-destek" | "blog" | "iletisim";
}

export function SidebarMenu({ active = "urunler" }: SidebarMenuProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(
    active === "urunler" || active === "teknik-destek" ? active : "urunler"
  );
  const { locale, t } = useLanguage();

  function toggleSubmenu(id: string) {
    setOpenSubmenu((prev) => (prev === id ? null : id));
  }

  return (
    <aside className="space-y-6">
      {/* 1. MENÜ KUTUSU (Screenshot Exact Match) */}
      <div className="border border-gray-200 bg-white">
        {/* Kırmızı Başlık Barı */}
        <div className="flex items-center gap-2 bg-[#c61d23] px-4 py-3 text-white">
          <span className="text-sm">🗂</span>
          <span className="text-sm font-bold tracking-wide uppercase">{t("sidebarMenuTitle")}</span>
        </div>

        {/* Menü Linkleri */}
        <nav className="divide-y divide-gray-100 text-[14px] text-gray-700">
          <Link
            href="/kurumsal"
            className={`flex items-center gap-2.5 px-4 py-3 hover:bg-gray-50 hover:text-[#c61d23] transition-colors ${
              active === "hakkimizda" ? "font-bold text-[#c61d23] bg-gray-50/80" : ""
            }`}
          >
            <span className="text-gray-400">👤</span>
            <span>{t("sidebarAbout")}</span>
          </Link>

          <div>
            <div className="flex items-center justify-between hover:bg-gray-50">
              <Link
                href="/urunler"
                className={`flex-1 flex items-center gap-2.5 px-4 py-3 transition-colors ${
                  active === "urunler" ? "font-bold text-[#c61d23]" : "hover:text-[#c61d23]"
                }`}
              >
                <span className={active === "urunler" ? "text-[#c61d23]" : "text-gray-400"}>📦</span>
                <span>{t("sidebarProducts")}</span>
              </Link>
              <button
                type="button"
                onClick={() => toggleSubmenu("urunler")}
                className="px-4 py-3 text-xs text-gray-400 hover:text-gray-700 cursor-pointer"
                aria-label="Submenu toggle"
              >
                {openSubmenu === "urunler" ? "▲" : "▼"}
              </button>
            </div>

            {openSubmenu === "urunler" && (
              <div className="border-t border-gray-100 bg-gray-50/70 px-4 py-2 space-y-1.5 text-[13px]">
                {products.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/urunler/${p.slug}`}
                    className="block py-1 text-gray-600 hover:text-[#c61d23] transition-colors"
                  >
                    {locale === "en" ? p.titleEn : p.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between hover:bg-gray-50">
              <Link
                href="/teknik-destek"
                className={`flex-1 flex items-center gap-2.5 px-4 py-3 transition-colors ${
                  active === "teknik-destek" ? "font-bold text-[#c61d23]" : "hover:text-[#c61d23]"
                }`}
              >
                <span className={active === "teknik-destek" ? "text-[#c61d23]" : "text-gray-400"}>🎧</span>
                <span>{t("sidebarSupport")}</span>
              </Link>
              <button
                type="button"
                onClick={() => toggleSubmenu("destek")}
                className="px-4 py-3 text-xs text-gray-400 hover:text-gray-700 cursor-pointer"
                aria-label="Support submenu toggle"
              >
                {openSubmenu === "destek" ? "▲" : "▼"}
              </button>
            </div>

            {openSubmenu === "destek" && (
              <div className="border-t border-gray-100 bg-gray-50/70 px-4 py-2 space-y-1.5 text-[13px]">
                <Link
                  href="/teknik-destek#termal-kafa"
                  className="block py-1 text-gray-600 hover:text-[#c61d23] transition-colors"
                >
                  {locale === "en" ? "Printhead Maintenance" : "Termal Kafa Bakımı"}
                </Link>
                <Link
                  href="/teknik-destek#kuka-capi"
                  className="block py-1 text-gray-600 hover:text-[#c61d23] transition-colors"
                >
                  {locale === "en" ? "Core Sizes (40mm / 76mm)" : "Kuka Çapı (40mm / 76mm)"}
                </Link>
                <Link
                  href="/teknik-destek#ribon-secimi"
                  className="block py-1 text-gray-600 hover:text-[#c61d23] transition-colors"
                >
                  {locale === "en" ? "Ribbon Compatibility" : "Ribon ve Etiket Uyumu"}
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className={`flex items-center gap-2.5 px-4 py-3 hover:bg-gray-50 hover:text-[#c61d23] transition-colors ${
              active === "blog" ? "font-bold text-[#c61d23] bg-gray-50/80" : ""
            }`}
          >
            <span className="text-gray-400">✍️</span>
            <span>{t("sidebarBlog")}</span>
          </Link>

          <Link
            href="/iletisim"
            className={`flex items-center gap-2.5 px-4 py-3 hover:bg-gray-50 hover:text-[#c61d23] transition-colors ${
              active === "iletisim" ? "font-bold text-[#c61d23] bg-gray-50/80" : ""
            }`}
          >
            <span className="text-gray-400">✉️</span>
            <span>{t("sidebarContact")}</span>
          </Link>
        </nav>
      </div>

      {/* 2. A KALİTE HAMMADDE (Screenshot Exact Match) */}
      <div className="border border-gray-200 bg-white p-4 border-l-4 border-l-[#ff6d00]">
        <div className="flex items-start gap-3">
          <div className="shrink-0 text-[#ff6d00] pt-0.5">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4m0 0v10" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900">
              {t("rawMaterialTitle")}
            </h3>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              {t("rawMaterialDesc")}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
