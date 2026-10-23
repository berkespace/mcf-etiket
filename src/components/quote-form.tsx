"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { site } from "@/lib/site";

const productOptionsTr = [
  "Eco Termal Etiket",
  "Lamine Termal Etiket",
  "Termal Sandviç Etiket",
  "Kuşe Etiket",
  "PP Opak Etiket",
  "Barkod Ribonları",
  "Özel Ebat / Baskılı Etiket",
];

const productOptionsEn = [
  "Direct Thermal Eco Label",
  "Top Coated Thermal Label",
  "Thermal Sandwich Label",
  "Semi-Gloss Kuşe Label",
  "PP Opaque Synthetic Label",
  "Thermal Transfer Barcode Ribbons",
  "Custom Size / Printed Label",
];

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const { locale, t } = useLanguage();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const options = locale === "en" ? productOptionsEn : productOptionsTr;

  if (submitted) {
    return (
      <div className="border border-green-200 bg-green-50 p-6 text-center text-sm">
        <h3 className="font-bold text-green-900 text-base">{t("quoteSuccessTitle")}</h3>
        <p className="mt-1 text-green-800">
          {t("quoteSuccessDesc")}
        </p>
        <p className="mt-2 text-xs text-green-700">
          Acil durumlarda doğrudan yetkilimiz <strong>{site.contactPerson}</strong> ile{" "}
          <a href={`tel:${site.phoneRaw}`} className="underline font-bold">
            {site.phone}
          </a>{" "}
          numarasından iletişime geçebilirsiniz.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 inline-block bg-gray-900 text-white text-xs px-4 py-2 rounded-sm cursor-pointer"
        >
          {t("sendNewQuoteBtn")}
        </button>
      </div>
    );
  }

  return (
    <form
      id="teklif-al"
      onSubmit={handleSubmit}
      className="border border-gray-200 bg-white p-6"
    >
      <div className="border-b border-gray-200 pb-3 mb-5">
        <h3 className="text-base font-bold text-gray-900">
          {t("quoteTitle")}
        </h3>
        <p className="mt-1 text-xs text-gray-500">
          {t("quoteDesc")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            {t("productSelectLabel")}
          </label>
          <select
            id="product-select"
            required
            className="w-full border border-gray-300 p-2 text-sm text-gray-800 outline-none focus:border-[#c61d23]"
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            {t("dimensionLabel")}
          </label>
          <input
            type="text"
            placeholder={t("dimensionPlaceholder")}
            className="w-full border border-gray-300 p-2 text-sm text-gray-800 outline-none focus:border-[#c61d23]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            {t("qtyLabel")}
          </label>
          <input
            type="text"
            placeholder={t("qtyPlaceholder")}
            className="w-full border border-gray-300 p-2 text-sm text-gray-800 outline-none focus:border-[#c61d23]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            {t("nameLabel")}
          </label>
          <input
            type="text"
            required
            placeholder={t("namePlaceholder")}
            className="w-full border border-gray-300 p-2 text-sm text-gray-800 outline-none focus:border-[#c61d23]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            {t("phoneLabel")}
          </label>
          <input
            type="tel"
            required
            placeholder={t("phonePlaceholder")}
            className="w-full border border-gray-300 p-2 text-sm text-gray-800 outline-none focus:border-[#c61d23]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            {t("emailLabel")}
          </label>
          <input
            type="email"
            placeholder={t("emailPlaceholder")}
            className="w-full border border-gray-300 p-2 text-sm text-gray-800 outline-none focus:border-[#c61d23]"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            {t("notesLabel")}
          </label>
          <textarea
            rows={3}
            placeholder={t("notesPlaceholder")}
            className="w-full border border-gray-300 p-2 text-sm text-gray-800 outline-none focus:border-[#c61d23] resize-none"
          />
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-500">
          Hızlı sipariş & bilgi:{" "}
          <a href={`tel:${site.phoneRaw}`} className="font-bold text-gray-900 hover:text-[#c61d23]">
            {site.contactPerson} ({site.phone})
          </a>
        </p>
        <button
          type="submit"
          className="bg-[#c61d23] hover:bg-[#b0141a] text-white text-sm font-semibold px-6 py-2.5 rounded-sm transition-colors cursor-pointer w-full sm:w-auto text-center"
        >
          {t("submitQuoteBtn")}
        </button>
      </div>
    </form>
  );
}
