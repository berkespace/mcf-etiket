"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

interface PageBannerProps {
  title?: string;
  subtitle?: string;
  breadcrumb?: string;
}

export function PageBanner({
  title,
  subtitle,
  breadcrumb,
}: PageBannerProps) {
  const { t } = useLanguage();

  const displayTitle = title || t("homeBannerTitle");
  const displaySubtitle = subtitle || t("homeBannerSubtitle");
  const displayBreadcrumb = breadcrumb || t("breadcrumbProducts");

  return (
    <section className="bg-[#333333] py-7 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-[28px] font-normal tracking-normal text-white">
            {displayTitle}
          </h1>
          {displaySubtitle && (
            <p className="mt-1 text-xs sm:text-sm text-gray-300">
              {displaySubtitle}
            </p>
          )}
        </div>

        {displayBreadcrumb && (
          <div className="flex items-center gap-1.5 text-xs sm:text-[13px] text-gray-300 shrink-0">
            <Link href="/" className="hover:text-white transition-colors">
              {t("breadcrumbHome")}
            </Link>
            <span className="text-gray-400">»</span>
            <span className="text-gray-200">{displayBreadcrumb}</span>
          </div>
        )}
      </div>
    </section>
  );
}
