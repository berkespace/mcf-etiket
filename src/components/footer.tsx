"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";
import { products } from "@/lib/products";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { locale, t } = useLanguage();

  return (
    <footer id="iletisim" className="section-anchor border-t border-gray-200 bg-[#2b2b2b] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Logo & Şirket Bilgisi */}
          <div>
            <Logo className="h-10 w-auto" />
            <p className="mt-3 text-xs text-gray-400 leading-relaxed max-w-sm">
              {t("footerDesc")}
            </p>
            <p className="mt-3 text-xs text-gray-400">
              {t("footerAddress")}
            </p>
          </div>

          {/* Ürünler */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-gray-200 mb-3">
              {t("footerProductsTitle")}
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/urunler/${p.slug}`} className="hover:text-white transition-colors">
                    {locale === "en" ? p.titleEn : p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-gray-200 mb-3">
              {t("footerContactTitle")}
            </h4>
            <div className="space-y-1.5 text-xs text-gray-400">
              <p>
                {locale === "en" ? "Phone: " : "Telefon: "}
                <a href={`tel:${site.phoneRaw}`} className="text-white hover:underline">
                  {t("phone")}
                </a>
              </p>
              <p>
                {locale === "en" ? "Email: " : "E-posta: "}
                <a href={`mailto:${site.email}`} className="text-white hover:underline">
                  {t("email")}
                </a>
              </p>
              <p>Web: {site.websiteLabel}</p>
              <p className="pt-2 text-gray-400">{t("footerWorkingHours")}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700/60 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <p>© 2026 {site.name}. {t("footerAllRights")}</p>
          <div className="flex gap-4">
            <Link href="/kvkk" className="hover:text-gray-200">
              {t("footerKvkk")}
            </Link>
            <Link href="/kullanim-sartlari" className="hover:text-gray-200">
              {t("footerTerms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
