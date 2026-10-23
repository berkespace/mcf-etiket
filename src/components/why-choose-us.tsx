const features = [
  {
    title: "Hızlı Teslimat",
    description:
      "Planlı üretim ve sevkiyatla siparişlerinizi kararlaştırılan sürede teslim ediyoruz.",
    icon: TruckIcon,
  },
  {
    title: "Özel Boyut ve Tasarım",
    description:
      "Ölçü, malzeme ve baskı düzenini ürününüze ve hattınıza göre hazırlıyoruz.",
    icon: RulerIcon,
  },
  {
    id: "teknoloji",
    title: "Gelişmiş Baskı Teknolojisi",
    description:
      "Net barkod, logo ve değişken veriyi yüksek çözünürlüklü baskı hatlarında üretiyoruz.",
    icon: PrintIcon,
  },
  {
    title: "Sektör Tecrübesi",
    description:
      "Gıda, ilaç, sanayi ve lojistikte edindiğimiz üretim deneyimini her işe taşıyoruz.",
    icon: GearIcon,
  },
];

export function WhyChooseUs() {
  return (
    <section id="hakkimizda" className="section-anchor bg-paper">
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-24">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(240px,0.65fr)] lg:gap-16">
          <div>
            <p className="text-[12px] font-medium tracking-[0.16em] text-accent">
              /NEDEN BİZİ SEÇMELİSİNİZ
            </p>
            <h2 className="mt-4 max-w-[16ch] text-[2.15rem] font-medium leading-[1.08] tracking-[-0.03em] text-navy md:text-[3.15rem]">
              Uzmanlık, Hassasiyet ve Son Teknoloji Üretim
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-7 text-muted lg:pt-10 lg:justify-self-end">
            Tüm etiket ihtiyaçlarınız için entegre, verimli ve özelleştirilebilir
            çözümler sunuyoruz.
          </p>
        </div>

        <ul
          id="yaklasimimiz"
          className="section-anchor mt-16 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
            <li key={feature.title} id={feature.id} className="section-anchor">
              <Icon />
              <h3 className="mt-5 text-[15px] font-semibold text-navy">{feature.title}</h3>
              <p className="mt-2 text-[14px] leading-6 text-muted">{feature.description}</p>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function TruckIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 text-accent" fill="none" aria-hidden="true">
      <path d="M3 8.5h15.5V21H3V8.5Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M18.5 13H24l4 4.2V21h-9.5v-8Z" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="9" cy="23.2" r="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="23.2" cy="23.2" r="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function RulerIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 text-accent" fill="none" aria-hidden="true">
      <path d="M7 22.5 22.5 7l3.2 3.2L10.2 25.7 7 22.5Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M11 18.5 13.2 16.3M14.2 15.3 16.4 13.1M17.4 12.1 19.6 9.9" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="23.5" cy="22.5" r="4.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="23.5" cy="22.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function PrintIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 text-accent" fill="none" aria-hidden="true">
      <path d="M8 12V6.5h16V12" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 20.5h16V26H8v-5.5Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 12h20v8.5H6V12Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M22 15.2h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 text-accent" fill="none" aria-hidden="true">
      <circle cx="14" cy="15" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M14 8.2v2.1M14 19.7v2.1M7.2 15h2.1M18.7 15h2.1M9.2 10.2l1.5 1.5M17.3 18.3l1.5 1.5M9.2 19.8l1.5-1.5M17.3 11.7l1.5-1.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M21.5 20.2c.7-1.3 2.4-1.6 3.4-.6l.2.2c.5.6.4 1.5-.3 2l-1.6 1.1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
