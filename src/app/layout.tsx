import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { LanguageProvider } from "@/lib/i18n";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mcfetiket.com"),
  title: {
    default: "MCF Etiket | Endüstriyel Rulo ve Barkod Etiket Çözümleri - KARDEŞLER KAĞIT",
    template: "%s | MCF Etiket - KARDEŞLER KAĞIT",
  },
  description:
    "KARDEŞLER KAĞIT AMB. SAN. TİC. LTD. ŞTİ. güvencesiyle MCF Etiket; eco termal, lamine termal, kuşe etiket, PP opak ve barkod ribonlarında yüksek hassasiyetli rulo üretim çözümleri sunar. Kepez / Antalya fabrikamızdan hızlı teslimat.",
  keywords: [
    "MCF Etiket",
    "Kardeşler Kağıt",
    "KARDEŞLER KAĞIT AMB. SAN. TİC. LTD. ŞTİ.",
    "rulo etiket",
    "barkod etiketi",
    "termal etiket",
    "eco termal etiket",
    "lamine termal etiket",
    "kuşe etiket",
    "pp opak etiket",
    "sandviç etiket",
    "barkod ribonu",
    "wax ribon",
    "resin ribon",
    "wax resin ribon",
    "baskılı rulo etiket",
    "baskısız rulo etiket",
    "etiket üreticisi antalya",
    "antalya etiket fabrikası",
    "kepez etiket imalatı",
    "endüstriyel etiket çözümleri",
    "Mustafa Güçlü",
  ],
  authors: [
    { name: "KARDEŞLER KAĞIT AMB. SAN. TİC. LTD. ŞTİ." },
    { name: "Mustafa Güçlü", url: "https://mcfetiket.com/iletisim" },
  ],
  creator: "KARDEŞLER KAĞIT AMB. SAN. TİC. LTD. ŞTİ.",
  publisher: "MCF Etiket",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg?v=3", type: "image/svg+xml" },
      { url: "/icon.png?v=3", type: "image/png" },
      { url: "/favicon.ico?v=3" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: "/apple-icon.png?v=3",
  },
  openGraph: {
    title: "MCF Etiket | Endüstriyel Rulo ve Barkod Etiket Çözümleri",
    description:
      "KARDEŞLER KAĞIT AMB. SAN. TİC. LTD. ŞTİ. - Eco termal, lamine termal, kuşe, PP opak etiketler ve barkod ribonlarında doğrudan üretici fiyatları. Kepez / Antalya.",
    url: "https://mcfetiket.com",
    siteName: "MCF Etiket - KARDEŞLER KAĞIT",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MCF Etiket - KARDEŞLER KAĞIT Rulo Etiket Çözümleri",
        type: "image/jpeg",
      },
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MCF Etiket Fabrika Önizleme",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MCF Etiket | Endüstriyel Rulo ve Barkod Etiket Çözümleri",
    description:
      "KARDEŞLER KAĞIT AMB. SAN. TİC. LTD. ŞTİ. - Antalya Kepez etiket ve ribon üretim tesisi.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mcfetiket.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MCF Etiket",
  "legalName": site.companyTitle,
  "url": "https://mcfetiket.com",
  "logo": "https://mcfetiket.com/images/logo.png",
  "image": "https://mcfetiket.com/images/og-image.jpg",
  "telephone": site.phoneRaw,
  "email": site.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Altayak Mahallesi 8192 Sokak Ertuğrul Gazi Caddesi No:11",
    "addressLocality": "Kepez",
    "addressRegion": "Antalya",
    "postalCode": "07250",
    "addressCountry": "TR",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": site.phoneRaw,
    "contactType": "sales",
    "name": site.contactPerson,
    "availableLanguage": ["Turkish", "English"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-white font-sans text-gray-800">
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <WhatsAppWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
