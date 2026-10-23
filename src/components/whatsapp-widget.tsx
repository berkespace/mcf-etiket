"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

export function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(true);
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Konuşma Baloncuğu (Screenshot Exact Match) */}
      {showTooltip && (
        <div className="relative border border-gray-200 bg-white px-3.5 py-2.5 shadow-md text-left text-xs max-w-[220px]">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-1.5 text-gray-400 hover:text-gray-600 text-[10px] cursor-pointer"
            aria-label="Kapat"
          >
            ✕
          </button>
          <div className="flex items-center gap-1.5 mb-1 border-b border-gray-100 pb-1">
            <span className="inline-block h-2 w-2 rounded-full bg-[#25D366]"></span>
            <span className="font-bold text-[11px] text-gray-900">{site.contactPerson}</span>
          </div>
          <p className="font-semibold text-gray-800 pr-3">
            {t("waTooltipTitle")}
          </p>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block font-bold text-[#25D366] hover:underline"
          >
            {site.phone} ({t("waTooltipLink")})
          </a>
        </div>
      )}

      {/* WhatsApp Butonu */}
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md hover:bg-[#20ba5a] transition-transform active:scale-95"
      >
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.13.82.83-3.05-.2-.31a8.16 8.16 0 01-1.25-4.38c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.41 3.61 2.41 5.8 0 4.52-3.68 8.2-8.14 8.2zm4.49-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z" />
        </svg>
      </a>
    </div>
  );
}
