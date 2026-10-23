"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

export type Locale = "tr" | "en";

export const translations = {
  tr: {
    // Top bar
    phone: "0 (212) 674 88 90",
    email: "info@mcfetiket.com",
    trLabel: "Türkçe",
    enLabel: "English",

    // Nav
    navHome: "Anasayfa",
    navAbout: "Kurumsal",
    navProducts: "Ürünler",
    navSupport: "Teknik Destek",
    navBlog: "Blog",
    navContact: "İletişim",
    seeAllProducts: "Tüm Ürünleri Gör →",

    // Banner
    homeBannerTitle: "Endüstriyel Rulo ve Barkod Etiket Çözümleri",
    homeBannerSubtitle: "Baskılı ve baskısız rulo etiketlerde yüksek hassasiyet ve zamanında üretim",
    breadcrumbHome: "Anasayfa",
    breadcrumbProducts: "Ürünlerimiz",

    // Sidebar
    sidebarMenuTitle: "MENÜ",
    sidebarAbout: "Hakkımızda",
    sidebarProducts: "Ürünler",
    sidebarSupport: "Teknik Destek",
    sidebarBlog: "Blog",
    sidebarContact: "İletişim",
    rawMaterialTitle: "A Kalite Hammadde",
    rawMaterialDesc: "Avrupa menşei hammaddelerimizle istediğiniz ölçü ve adette üretim yapıyoruz.",

    // Quote Form
    quoteTitle: "Fiyat Teklifi ve Bilgi Talebi",
    quoteDesc: "Ürün grubu, ebat ve adet bilgisi girerek doğrudan üretici fiyatı alabilirsiniz.",
    productSelectLabel: "Ürün Seçiniz *",
    dimensionLabel: "Ölçü (En x Boy mm)",
    dimensionPlaceholder: "Örn: 100 x 150 mm",
    qtyLabel: "Tahmini Adet / Rulo",
    qtyPlaceholder: "Örn: 50 Rulo veya 50.000 Adet",
    nameLabel: "Adınız Soyadınız *",
    namePlaceholder: "Ad Soyad",
    phoneLabel: "Telefon Numarası *",
    phonePlaceholder: "05XX XXX XX XX",
    emailLabel: "E-posta Adresi",
    emailPlaceholder: "ornek@firma.com",
    notesLabel: "Açıklama / Not",
    notesPlaceholder: "Kuka çapı (40mm / 76mm), tutkal türü veya özel isteklerinizi belirtebilirsiniz.",
    submitQuoteBtn: "Teklif Talebini Gönder",
    quoteSuccessTitle: "Talebiniz Alındı",
    quoteSuccessDesc: "Teklif talebiniz ekibimize iletilmiştir. En kısa sürede sizinle iletişime geçeceğiz.",
    sendNewQuoteBtn: "Yeni Form Gönder",

    // WhatsApp
    waTooltipTitle: "Size nasıl yardımcı olabiliriz?",
    waTooltipLink: "Hemen iletişime geçin.",

    // Search
    searchPlaceholder: "Ürün adı yazarak arayın...",
    searchClose: "Kapat (ESC)",
    searchNoResults: "Sonuç bulunamadı.",

    // Footer
    footerDesc: "MCF Etiket; termal etiket, kuşe etiket, plastik bazlı etiketler ve barkod ribonlarında yüksek hassasiyetli rulo üretim çözümleri sunar.",
    footerProductsTitle: "Ürün Gruplarımız",
    footerContactTitle: "İletişim",
    footerAddress: "İkitelli Organize Sanayi Bölgesi, Triko Center Sanayi Sitesi M Blok No:41, Başakşehir / İstanbul",
    footerWorkingHours: "Hafta içi: 08:30 - 18:30 | Cumartesi: 09:00 - 14:00",
    footerAllRights: "Tüm hakları saklıdır.",
    footerKvkk: "KVKK",
    footerTerms: "Kullanım Şartları",
  },
  en: {
    // Top bar
    phone: "+90 (212) 674 88 90",
    email: "info@mcfetiket.com",
    trLabel: "Türkçe",
    enLabel: "English",

    // Nav
    navHome: "Home",
    navAbout: "About Us",
    navProducts: "Products",
    navSupport: "Support",
    navBlog: "Blog",
    navContact: "Contact",
    seeAllProducts: "View All Products →",

    // Banner
    homeBannerTitle: "Industrial Roll & Barcode Label Solutions",
    homeBannerSubtitle: "High precision manufacturing of printed and plain roll labels with on-time delivery",
    breadcrumbHome: "Home",
    breadcrumbProducts: "Our Products",

    // Sidebar
    sidebarMenuTitle: "MENU",
    sidebarAbout: "About Us",
    sidebarProducts: "Products",
    sidebarSupport: "Technical Support",
    sidebarBlog: "Blog",
    sidebarContact: "Contact",
    rawMaterialTitle: "A-Grade Raw Materials",
    rawMaterialDesc: "We manufacture in your custom dimensions and quantities using certified European raw materials.",

    // Quote Form
    quoteTitle: "Request a Price Quote & Information",
    quoteDesc: "Enter your product type, size and quantity to get direct manufacturer pricing.",
    productSelectLabel: "Select Product *",
    dimensionLabel: "Dimensions (W x H mm)",
    dimensionPlaceholder: "e.g. 100 x 150 mm",
    qtyLabel: "Estimated Quantity / Rolls",
    qtyPlaceholder: "e.g. 50 Rolls or 50,000 Pcs",
    nameLabel: "Full Name *",
    namePlaceholder: "Your Name",
    phoneLabel: "Phone Number *",
    phonePlaceholder: "+90 5XX XXX XX XX",
    emailLabel: "Email Address",
    emailPlaceholder: "example@company.com",
    notesLabel: "Specifications / Notes",
    notesPlaceholder: "Specify core diameter (40mm / 76mm), adhesive type, or special requirements.",
    submitQuoteBtn: "Submit Quote Request",
    quoteSuccessTitle: "Request Received",
    quoteSuccessDesc: "Your quote request has been received. Our team will contact you with pricing shortly.",
    sendNewQuoteBtn: "Submit Another Request",

    // WhatsApp
    waTooltipTitle: "How can we assist you?",
    waTooltipLink: "Contact us right away.",

    // Search
    searchPlaceholder: "Type a product name to search...",
    searchClose: "Close (ESC)",
    searchNoResults: "No results found.",

    // Footer
    footerDesc: "MCF Etiket delivers high precision roll manufacturing in thermal labels, semi-gloss labels, synthetic labels and barcode ribbons.",
    footerProductsTitle: "Our Products",
    footerContactTitle: "Contact Us",
    footerAddress: "Ikitelli Organized Industrial Zone, Triko Center M Block No:41, Istanbul / Turkey",
    footerWorkingHours: "Mon - Fri: 08:30 - 18:30 | Saturday: 09:00 - 14:00",
    footerAllRights: "All rights reserved.",
    footerKvkk: "Privacy Policy",
    footerTerms: "Terms of Use",
  },
};

type TranslationKey = keyof typeof translations.tr;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "tr",
  setLocale: () => {},
  t: (key) => translations.tr[key] || key,
});

let memoryLocale: Locale = "tr";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("mcf-locale-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("mcf-locale-change", callback);
  };
}

function getSnapshot(): Locale {
  if (typeof window === "undefined") return "tr";
  const saved = localStorage.getItem("mcf_locale") as Locale | null;
  if (saved === "tr" || saved === "en") return saved;
  return memoryLocale;
}

function getServerSnapshot(): Locale {
  return "tr";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function setLocale(newLocale: Locale) {
    memoryLocale = newLocale;
    if (typeof window !== "undefined") {
      localStorage.setItem("mcf_locale", newLocale);
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
      document.documentElement.lang = newLocale;
      window.dispatchEvent(new Event("mcf-locale-change"));
    }
  }

  function t(key: TranslationKey): string {
    const dict = translations[locale] || translations.tr;
    return dict[key] || translations.tr[key] || key;
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
