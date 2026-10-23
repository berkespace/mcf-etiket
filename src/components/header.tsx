"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";
import { SearchModal } from "@/components/search-modal";
import { products } from "@/lib/products";
import { useLanguage } from "@/lib/i18n";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { locale, setLocale, t } = useLanguage();

  return (
    <>
      {/* 1. ÜST BİLGİ ÇUBUĞU (Screenshot Top-Bar) */}
      <div className="border-b border-gray-200 bg-white text-[13px] text-gray-700">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-gray-700 hover:text-[#c61d23] transition-colors"
            >
              <svg className="h-3.5 w-3.5 text-[#c61d23]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z" />
              </svg>
              <span>{t("contactPerson")}: {t("phone")}</span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-gray-700 hover:text-[#c61d23] transition-colors"
            >
              <svg className="h-3.5 w-3.5 text-[#c61d23]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>{t("email")}</span>
            </a>
          </div>

          {/* DİL SEÇİMİ (Language Switcher - Functional) */}
          <div className="flex items-center gap-2 text-xs">
            <button
              type="button"
              onClick={() => setLocale("tr")}
              className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded cursor-pointer transition ${
                locale === "tr"
                  ? "font-bold text-gray-900 bg-gray-100"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              title="Türkçe"
            >
              <span>🇹🇷</span>
              <span>{t("trLabel")}</span>
            </button>
            <span className="text-gray-300">|</span>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded cursor-pointer transition ${
                locale === "en"
                  ? "font-bold text-gray-900 bg-gray-100"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              title="English"
            >
              <span>🇬🇧</span>
              <span>{t("enLabel")}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. ANA BAŞLIK / MENÜ ÇUBUĞU */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Sol: Logo */}
          <div className="flex items-center">
            <Logo className="h-11 w-auto" />
          </div>

          {/* Orta: Masaüstü Navigasyon */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-gray-700">
            <Link href="/" className="hover:text-[#c61d23] transition-colors">
              {t("navHome")}
            </Link>

            <Link href="/kurumsal" className="hover:text-[#c61d23] transition-colors">
              {t("navAbout")}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("urunler")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/urunler"
                className="flex items-center gap-1 hover:text-[#c61d23] transition-colors"
              >
                <span>{t("navProducts")}</span>
                <span className="text-xs text-gray-400">⌵</span>
              </Link>
              {openDropdown === "urunler" && (
                <div className="absolute top-full left-0 z-50 w-56 bg-white border border-gray-200 shadow-md py-2">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/urunler/${p.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c61d23]"
                    >
                      {locale === "en" && p.titleEn ? p.titleEn : p.title}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link
                      href="/urunler"
                      className="block px-4 py-1.5 text-xs font-semibold text-[#c61d23] hover:underline"
                    >
                      {t("seeAllProducts")}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/teknik-destek" className="hover:text-[#c61d23] transition-colors">
              {t("navSupport")}
            </Link>

            <Link href="/blog" className="hover:text-[#c61d23] transition-colors">
              {t("navBlog")}
            </Link>
          </nav>

          {/* Sağ: İletişim Butonu ve Arama */}
          <div className="flex items-center gap-3">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-md bg-[#c61d23] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b0141a]"
            >
              {t("navContact")}
            </Link>

            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Arama"
              className="p-2 text-gray-600 hover:text-gray-900 transition cursor-pointer"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobil Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menü"
              className="p-2 text-gray-700 lg:hidden cursor-pointer"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobil Menü */}
        {mobileOpen && (
          <div className="border-t border-gray-200 bg-white px-4 py-4 lg:hidden">
            <div className="flex flex-col space-y-3 text-sm font-medium text-gray-700">
              <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-[#c61d23]">
                {t("navHome")}
              </Link>
              <Link href="/kurumsal" onClick={() => setMobileOpen(false)} className="hover:text-[#c61d23]">
                {t("navAbout")}
              </Link>
              <Link href="/urunler" onClick={() => setMobileOpen(false)} className="hover:text-[#c61d23]">
                {t("navProducts")}
              </Link>
              <Link href="/teknik-destek" onClick={() => setMobileOpen(false)} className="hover:text-[#c61d23]">
                {t("navSupport")}
              </Link>
              <Link href="/blog" onClick={() => setMobileOpen(false)} className="hover:text-[#c61d23]">
                {t("navBlog")}
              </Link>
              <Link
                href="/iletisim"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-[#c61d23] py-2 text-white font-semibold"
              >
                {t("navContact")}
              </Link>
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 py-2 text-white font-semibold text-xs"
              >
                <span>📞 {site.contactPerson}: {site.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
