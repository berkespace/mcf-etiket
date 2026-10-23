import Image from "next/image";

const services = [
  {
    title: "Endüstriyel Etiketler",
    description: "Ağır sanayi ekipmanlarında dayanıklı, okunaklı tanımlama.",
    src: "/images/industrial-labels.png",
    alt: "Sanayi ekipmanı üzerinde dayanıklı etiketler",
  },
  {
    title: "Gıda ve İlaç Etiketleri",
    description: "Hijyenik ambalaj ve şişeler için net, kontrollü baskı.",
    src: "/images/food-pharma-labels.png",
    alt: "İlaç şişeleri ve gıda ambalajları üzerindeki etiketler",
  },
  {
    title: "E-Ticaret ve Lojistik Etiketleri",
    description: "Kargo ve adres etiketlerinde barkod netliği.",
    src: "/images/logistics-labels.png",
    alt: "Kargo kutuları üzerindeki barkodlu adres etiketleri",
  },
];

export function ServicesGallery() {
  return (
    <section id="hizmetler" className="section-anchor bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="max-w-md text-[2rem] font-medium leading-tight tracking-[-0.03em] text-navy md:text-[2.4rem]">
            Üretim hattınıza uygun etiket grupları
          </h2>
          <a
            href="#iletisim"
            className="hidden shrink-0 rounded-full border border-accent/70 px-4 py-2 text-[13px] text-navy sm:inline-flex"
          >
            Teklif İste
          </a>
        </div>

        <ul className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <li key={service.title}>
              <article className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper">
                <Image
                  src={service.src}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-[16px] font-medium">{service.title}</h3>
                  <p className="mt-1 text-[13px] leading-5 text-white/80">{service.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
