"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchableItems = [
  {
    title: "Eco Termal Etiket",
    titleEn: "Direct Thermal Eco Label",
    category: "Termal",
    categoryEn: "Thermal",
    href: "/urunler/eco-termal-etiket",
    image: "/images/eco-termal-etiket.jpg",
  },
  {
    title: "Lamine Termal Etiket",
    titleEn: "Top Coated Thermal Label",
    category: "Termal",
    categoryEn: "Thermal",
    href: "/urunler/lamine-termal-etiket",
    image: "/images/lamine-termal-etiket.jpg",
  },
  {
    title: "Termal Sandviç Etiket",
    titleEn: "Thermal Sandwich Label",
    category: "Özel Etiket",
    categoryEn: "Specialty",
    href: "/urunler/termal-sandvic-etiket",
    image: "/images/sandvic-etiket.jpg",
  },
  {
    title: "Kuşe Etiket",
    titleEn: "Semi-Gloss Kuşe Label",
    category: "Standart",
    categoryEn: "Standard",
    href: "/urunler/kuse-etiket",
    image: "/images/kuse-etiket.jpg",
  },
  {
    title: "PP Opak Etiket",
    titleEn: "Polypropylene (PP) Opaque Label",
    category: "Plastik Bazlı",
    categoryEn: "Synthetic",
    href: "/urunler/pp-opak-etiket",
    image: "/images/pp-opak-etiket.jpg",
  },
  {
    title: "Barkod Ribonları",
    titleEn: "Thermal Transfer Barcode Ribbons",
    category: "Sarf Malzeme",
    categoryEn: "Supplies",
    href: "/urunler/barkod-ribonlari",
    image: "/images/barkod-ribon.jpg",
  },
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const { locale, t } = useLanguage();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? searchableItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.titleEn.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.categoryEn.toLowerCase().includes(query.toLowerCase())
      )
    : searchableItems;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-16 sm:pt-24"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl border border-gray-300 bg-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center border-b border-gray-200 px-4 py-3">
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 text-sm text-gray-900 outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="text-xs text-gray-500 hover:text-gray-800 cursor-pointer"
          >
            {t("searchClose")}
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-gray-100">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-gray-500">
              {t("searchNoResults")}
            </div>
          ) : (
            filtered.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 p-2.5 hover:bg-gray-50 transition-colors"
              >
                <div className="relative h-10 w-10 shrink-0 border border-gray-200 bg-gray-100">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-sm text-gray-900 hover:text-[#c61d23]">
                    {locale === "en" ? item.titleEn : item.title}
                  </span>
                  <span className="ml-2 text-xs text-gray-400">
                    ({locale === "en" ? item.categoryEn : item.category})
                  </span>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
