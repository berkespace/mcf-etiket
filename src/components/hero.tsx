import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* 1. Üst Metin Hiyerarşisi (2 Kolonlu Düzen) */}
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 md:px-12 lg:px-16 pt-8 sm:pt-12 md:pt-16 pb-6">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] lg:gap-16">
          
          {/* Sol Kolon: Çok Büyük, Cesur İki Satırlı Ana Başlık */}
          <div>
            <h1 className="text-[2.75rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6rem] font-bold leading-[1.0] tracking-[-0.035em] text-neutral-900">
              Markanızı Büyüten
              <br />
              Etiket Çözümleri
            </h1>
          </div>

          {/* Sağ Kolon: Başlık Hizalı Açıklama Metni & Siyah Hap CTA */}
          <div className="flex flex-col items-start lg:pt-3">
            <p className="max-w-[340px] text-[15px] sm:text-[15.5px] font-normal leading-[1.6] text-neutral-600">
              Özel ebatlarda termal rulo etiketler, barkod etiketleri ve yüksek
              kaliteli baskılı/baskısız sticker çözümleriyle üretiminize hız ve
              değer katıyoruz.
            </p>

            <div className="mt-6 sm:mt-7">
              <Link
                href="#urunler"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 sm:px-7 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Ürünleri Keşfet
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Hero Görsel Alanı: Beyaz Zemine Kusursuz Oturan Profesyonel Rulo Sahnesi */}
      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 md:px-12 lg:px-16 pt-2 pb-12 sm:pb-16 md:pb-20">
        
        {/* Görsel Container (Kutu/çerçeve/köşe/border YOK, zemine doğal oturan sahne) */}
        <div className="relative mx-auto flex w-full max-w-[1100px] items-end justify-center">
          <div className="relative h-[320px] sm:h-[440px] md:h-[540px] lg:h-[620px] w-full">
            <Image
              src="/images/hero-label-rolls.png"
              alt="MCF Etiket - Profesyonel Endüstriyel Rulo ve Barkod Etiket Çözümleri"
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-contain object-bottom"
            />
          </div>

          {/* Referanstaki Konteyner Markalamalarını Yansıtan Sade Endüstriyel Tipografi Katmanı */}
          {/* Sol Alt Endüstriyel Rulo İşaretleri */}
          <div className="pointer-events-none absolute left-0 bottom-6 sm:bottom-10 hidden sm:block font-mono text-neutral-400 select-none">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-700">
              /MCF-PRO SPEC
            </p>
            <p className="mt-1 text-[11px] text-neutral-500">
              Roll Specification: 100x150mm
            </p>
            <p className="text-[10px] text-neutral-400">
              Thermal Eco / Ribbon-Free • Core: Ø 40mm
            </p>
          </div>

          {/* Sağ Alt Endüstriyel Standart & Geri Dönüşüm İşaretleri */}
          <div className="pointer-events-none absolute right-0 bottom-6 sm:bottom-10 hidden sm:block font-mono text-right text-neutral-400 select-none">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
              ♺ FSC® RECYCLABLE LINER
            </p>
            <p className="mt-1 text-[11px] text-neutral-500">
              Dispenser Compatible • High Precision
            </p>
            <p className="text-[10px] text-neutral-400">
              Batch: #TR-2026-X8 • ISO 9001:2015
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
