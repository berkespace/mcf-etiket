export interface Product {
  slug: string;
  title: string;
  titleEn: string;
  category: "termal" | "kuse" | "plastik" | "ribon";
  categoryLabel: string;
  categoryLabelEn: string;
  image: string;
  alt: string;
  shortDesc: string;
  shortDescEn: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
  applications: string[];
}

export const products: Product[] = [
  {
    slug: "eco-termal-etiket",
    title: "Eco Termal Etiket",
    titleEn: "Direct Thermal Eco Label",
    category: "termal",
    categoryLabel: "Termal Etiket",
    categoryLabelEn: "Thermal Label",
    image: "/images/eco-termal-etiket.jpg",
    alt: "Eco Termal Etiket",
    shortDesc: "Isıya duyarlı özel yüzey teknolojisi ile ribonsuz direkt termal baskı.",
    shortDescEn: "Ribbon-free direct thermal printing with heat-sensitive coating technology.",
    description:
      "Eco Termal Etiketler, yüzeyine uygulanan ısı ile kararan özel kimyasal katmanı sayesinde barkod ribonuna ihtiyaç duymadan baskı almanızı sağlar. Kısa süreli kullanım gerektiren kargo barkodları, market tartı etiketleri, manav ve lojistik uygulamaları için en ekonomik çözümdür.",
    specs: [
      { label: "Baskı Türü", value: "Direkt Termal (Ribonsuz)" },
      { label: "Hammadde", value: "Avrupa Menşei Eco Termal Kağıt" },
      { label: "Yapışkan Türleri", value: "Akrilik (Standart), Hotmelt (Güçlü), Nonperm (Sökülebilir)" },
      { label: "Kuka Çapları", value: "Ø 40 mm (Masaüstü), Ø 76 mm (Endüstriyel)" },
      { label: "Dayanım Süresi", value: "Kapalı ve kuru ortamda 6 - 9 ay" },
      { label: "Uyumlu Yazıcılar", value: "Zebra, TSC, Honeywell, Argox, Godex, Citizen" },
    ],
    applications: [
      "E-ticaret ve kargo gönderi etiketleri",
      "Market ve süpermarket terazi etiketleri",
      "Koli ve palet üstü tanımlama barkodları",
      "Kısa süreli depo stok etiketlemeleri",
    ],
  },
  {
    slug: "lamine-termal-etiket",
    title: "Lamine Termal Etiket",
    titleEn: "Top Coated Thermal Label",
    category: "termal",
    categoryLabel: "Termal Etiket",
    categoryLabelEn: "Thermal Label",
    image: "/images/lamine-termal-etiket.jpg",
    alt: "Lamine Termal Etiket",
    shortDesc: "Üst koruyucu lak tabakasıyla nem, ışık ve sürtünmeye dayanıklı uzun ömürlü termal etiket.",
    shortDescEn: "Long-lasting thermal label with top barrier protective layer against moisture, light and friction.",
    description:
      "Top Termal olarak da bilinen Lamine Termal Etiketler, termal yüzeyinin üzerinde bulunan koruyucu tabaka (top coating) sayesinde nem, su, alkol, hafif yağ ve güneş ışığına karşı yüksek direnç gösterir. Ribonsuz baskı kolaylığını uzun raf ömrüyle birleştirir.",
    specs: [
      { label: "Baskı Türü", value: "Direkt Termal (Ribonsuz)" },
      { label: "Hammadde", value: "Lamine / Top Termal Koruyucu Kaplamalı Kağıt" },
      { label: "Yapışkan Türleri", value: "Akrilik, Deepfreeze (Dondurucu), Hotmelt" },
      { label: "Kuka Çapları", value: "Ø 40 mm, Ø 76 mm" },
      { label: "Dayanım Süresi", value: "1 - 3 Yıl (Ortam şartlarına bağlı)" },
      { label: "Dayanıklılık", value: "Nem, sürtünme ve hafif kimyasallara karşı korumalı" },
    ],
    applications: [
      "Soğuk hava deposu ve dondurulmuş gıda ürünleri",
      "İlaç kutuları ve medikal takip sistemleri",
      "Et, tavuk ve süt ürünleri ambalajları",
      "Uzun süreli kargo ve transfer süreçleri",
    ],
  },
  {
    slug: "termal-sandvic-etiket",
    title: "Termal Sandviç Etiket",
    titleEn: "Thermal Sandwich Label",
    category: "termal",
    categoryLabel: "Özel Termal",
    categoryLabelEn: "Specialty Label",
    image: "/images/sandvic-etiket.jpg",
    alt: "Termal Sandviç Etiket",
    shortDesc: "Çift katmanlı ayrılabilir taşıyıcı yapısıyla medikal ve lojistikte dosyalama kolaylığı.",
    shortDescEn: "Double-layer peel-and-read construction for medical records and logistics cross-docking.",
    description:
      "Termal Sandviç Etiketler (Peel & Read / Çift Taşıyıcılı), iki katmanlı silikon kağıt yapısına sahiptir. Etiketin üst parçası yapıştırıldığı yüzeyden iz bırakmadan kolayca sökülüp tahlil tüpüne, hasta dosyasına veya irsaliye nüshasına ikinci kez yapıştırılabilir.",
    specs: [
      { label: "Baskı Türü", value: "Direkt Termal veya Termal Transfer" },
      { label: "Katman Sayısı", value: "Çift Katmanlı (Sandviç) Taşıyıcı" },
      { label: "Yapışkan Türü", value: "Çok amaçlı özel transfer yapışkanı" },
      { label: "Kuka Çapları", value: "Ø 40 mm, Ø 76 mm" },
      { label: "Kullanım Özelliği", value: "Yırtılmadan sökülüp tekrar yapışma" },
    ],
    applications: [
      "Hastane laboratuvarları ve kan tüpü takibi",
      "Medikal dosyalama ve hasta kartları",
      "Lojistikte çapraz sevkiyat ve irsaliye eşleştirme",
      "Kargo aktarma ve iade yönetim süreçleri",
    ],
  },
  {
    slug: "kuse-etiket",
    title: "Kuşe Etiket",
    titleEn: "Semi-Gloss Kuşe Label",
    category: "kuse",
    categoryLabel: "Kuşe Etiket",
    categoryLabelEn: "Semi-Gloss Label",
    image: "/images/kuse-etiket.jpg",
    alt: "Kuşe Etiket",
    shortDesc: "Yarı parlak pürüzsüz yüzey, wax/resin ribon ile yıllarca solmayan canlı baskı.",
    shortDescEn: "Smooth semi-gloss surface for sharp barcode and vibrant color printing with wax/resin ribbon.",
    description:
      "Kuşe Etiketler, kağıt bazlı etiketler arasında en yaygın ve kaliteli çözümdür. Yarı parlak pürüzsüz yüzeyi sayesinde barkod ve logo baskılarında mükemmel netlik sunar. Termal transfer yazıcılarda Wax veya Wax-Resin ribon ile basılır.",
    specs: [
      { label: "Baskı Türü", value: "Termal Transfer (Ribonlu)" },
      { label: "Hammadde", value: "Yarı Parlak Kuşe Kağıt" },
      { label: "Uyumlu Ribon", value: "Wax Ribon, Wax-Resin Ribon" },
      { label: "Baskı Seçenekleri", value: "Baskısız Rulo veya 6 Renk Flekso Baskılı" },
      { label: "Kuka Çapları", value: "Ø 40 mm, Ø 76 mm" },
      { label: "Raf Ömrü", value: "3 - 5 Yıl" },
    ],
    applications: [
      "Gıda kavanozları, şişeler ve kuru gıda paketleri",
      "Tekstil ve hazır giyim ürün etiketleri",
      "Kozmetik ve kişisel bakım kutuları",
      "Kırtasiye ve perakende reyon ürünleri",
    ],
  },
  {
    slug: "pp-opak-etiket",
    title: "PP Opak Etiket",
    titleEn: "Polypropylene (PP) Opaque Label",
    category: "plastik",
    categoryLabel: "Plastik Bazlı",
    categoryLabelEn: "Synthetic Film",
    image: "/images/pp-opak-etiket.jpg",
    alt: "PP Opak Etiket",
    shortDesc: "Yırtılmaz sentetik polipropilen gövde. Su, yağ ve kimyasallara tam dayanım.",
    shortDescEn: "Tear-proof synthetic polypropylene film resistant to water, oil, chemicals and outdoor weathering.",
    description:
      "PP Opak (Polipropilen) Etiketler, plastik bazlı film grubundadır. Elle yırtılmaz, suya, neme, motor yağına ve çeşitli kimyasallara maruz kaldığında bozulmaz veya kabarmaz. Resin ribon ile basıldığında baskısı kesinlikle silinmez.",
    specs: [
      { label: "Baskı Türü", value: "Termal Transfer (Resin veya Wax-Resin Ribon)" },
      { label: "Hammadde", value: "Sentetik Polipropilen (PP Film)" },
      { label: "Fiziksel Özellik", value: "Esnek, Yırtılmaz, Sudan Etkilenmez" },
      { label: "Yapışkan Türleri", value: "Akrilik, Güçlü Hotmelt, Lastik Tutkal" },
      { label: "Kuka Çapları", value: "Ø 40 mm, Ø 76 mm" },
      { label: "Dayanıklılık", value: "Aşırı nem, soğuk, güneş ve yağ direnci" },
    ],
    applications: [
      "Kimya ve madeni yağ bidonları / varilleri",
      "Şampuan, duş jeli ve kozmetik şişeleri",
      "Dış mekan ve bahçe ekipmanları",
      "Otomotiv yedek parça ve akü etiketleri",
    ],
  },
  {
    slug: "barkod-ribonlari",
    title: "Barkod Ribonları",
    titleEn: "Thermal Transfer Barcode Ribbons",
    category: "ribon",
    categoryLabel: "Yazıcı Sarf Malzemesi",
    categoryLabelEn: "Printer Supplies",
    image: "/images/barkod-ribon.jpg",
    alt: "Barkod Ribonları",
    shortDesc: "Wax, Wax-Resin ve Resin formülasyonlu, yazıcı kafa ömrünü koruyan rulo ribonlar.",
    shortDescEn: "High-grade Wax, Wax-Resin and Resin ribbons engineered to maximize thermal printhead longevity.",
    description:
      "Termal Transfer Ribonlar, mürekkebin yazıcı termal kafasından gelen ısı ile etiketin yüzeyine aktarılmasını sağlar. Antistatik arka kaplaması yazıcı kafasını aşınmaya karşı korur. Etiketin hammaddesine göre doğru formülasyon (Wax, Wax-Resin veya Resin) seçilmelidir.",
    specs: [
      { label: "Ribon Çeşitleri", value: "Wax, Wax-Resin, D-Resin, Textile Resin" },
      { label: "Kafa Koruması", value: "Özel antistatik kaplama ile uzun kafa ömrü" },
      { label: "Standart Enler", value: "30mm, 40mm, 50mm, 60mm, 70mm, 80mm, 90mm, 100mm, 110mm" },
      { label: "Standart Metrajlar", value: "74m, 100m, 300m, 450m" },
      { label: "Sarım Yönü", value: "OUT (Dışa sarım) ve IN (İçe sarım)" },
      { label: "Uyumlu Cihazlar", value: "Tüm masaüstü ve endüstriyel barkod yazıcılar" },
    ],
    applications: [
      "Kuşe ve vellum etiketler için ekonomik Wax ribonlar",
      "Lojistik ve dış mekan için sürtünmeye dayanıklı Wax-Resin ribonlar",
      "PP Opak, Silver Mat ve kimyasal etiketler için Resin ribonlar",
      "Yıkama talimatı kumaş etiketler için D-Resin ribonlar",
    ],
  },
];
