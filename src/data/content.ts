export const siteConfig = {
  name: "Tijana Jolović",
  title: "Logoped",
  tagline: "Svaki glas zaslužuje da bude čuven",
  description:
    "Stručna logopedska terapija za decu i odrasle u Beogradu. Govorno-jezička terapija, rana intervencija, korekcija izgovora.",
  address: {
    street: "Slanački put 76",
    city: "Beograd",
    zip: "11060",
    area: "Višnjička Banja",
    country: "Srbija",
    lat: 44.7866,
    lng: 20.5199,
  },
  phone: "+381 XX XXX XXXX",
  email: "kontakt@jolovic.me",
  workingHours: "Pon–Pet: 8–20h, Sub: 9–14h",
  url: "https://jolovic.me",
  stats: [
    { value: "500+", label: "Porodica" },
    { value: "12+", label: "God. iskustva" },
    { value: "98%", label: "Preporuka" },
  ],
} as const;

export const aboutContent = {
  heroTitle: "Strast za govor,\nljubav prema deci",
  heroDescription:
    "Kabinet za logopediju Tijane Jolović je nastao iz uverenja da svako dete zaslužuje šansu da izrazi sebe. Kombinujemo stručnost, toplinu i igru u svakoj terapiji.",
  values: [
    {
      icon: "❤️",
      title: "Empatija pre svega",
      description:
        "Svako dete i porodica su jedinstveni. Slušamo, razumemo, pa planiramo terapiju.",
    },
    {
      icon: "🔬",
      title: "Zasnovano na nauci",
      description:
        "Koristimo metode potvrđene najnovijim naučnim istraživanjima.",
    },
    {
      icon: "🎮",
      title: "Učenje kroz igru",
      description:
        "Terapija kao zabava donosi najbolje i najtrajnije rezultate.",
    },
  ],
  credentials: [
    "Licencirani logoped",
    "Defektološki fakultet Univerziteta u Beogradu",
    "Srpska Logopedska Asocijacija",
  ],
} as const;

export const testimonial = {
  quote:
    "Marija je za tri meseca počela da priča u punim rečenicama. Terapeutkinja je svaku sesiju pretvorila u igru — dete jedva čeka sledeći put.",
  author: "Jelena M.",
  role: "Mama male Marije",
} as const;
