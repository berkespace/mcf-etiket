"use client";

import Image from "next/image";
import { useState } from "react";

const cards = [
  { title: "Rulo Etiket", src: "/images/hero-label-rolls.png", alt: "Rulo etiketler" },
  { title: "Endüstriyel", src: "/images/industrial-labels.png", alt: "Endüstriyel etiket" },
  { title: "Gıda ve İlaç", src: "/images/food-pharma-labels.png", alt: "Gıda ve ilaç etiketi" },
  { title: "Lojistik", src: "/images/logistics-labels.png", alt: "Lojistik etiketi" },
  { title: "Baskılı Rulo", src: "/images/hero-label-scene.jpg", alt: "Baskılı rulo etiket" },
];

export function HeroSlider() {
  const [start, setStart] = useState(0);
  const visible = [0, 1, 2].map((offset) => cards[(start + offset) % cards.length]);

  return (
    <div className="mx-auto max-w-[1180px] px-6 pb-16 md:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {visible.map((card) => (
          <article key={card.title} className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100">
            <Image src={card.src} alt={card.alt} fill className="object-cover" sizes="(min-width: 640px) 33vw, 100vw" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5">
              <p className="text-lg font-medium text-white">{card.title}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-5 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Önceki"
          onClick={() => setStart((value) => (value - 1 + cards.length) % cards.length)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-lg"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Sonraki"
          onClick={() => setStart((value) => (value + 1) % cards.length)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-lg"
        >
          ›
        </button>
      </div>
    </div>
  );
}
