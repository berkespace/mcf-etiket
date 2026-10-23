import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MCF Etiket - Rulo ve Barkod Etiket Çözümleri",
  description: "Baskılı ve baskısız rulo etiketlerde hassas üretim. Eco termal, lamine termal, kuşe ve barkod ribonları.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
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
