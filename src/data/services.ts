export interface Service {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

export const services: Service[] = [
  {
    icon: "🗣️",
    title: "Govorno-jezička terapija",
    description:
      "Individualni pristup razvoju artikulacije, govora i komunikacije kod dece i odraslih.",
    bgColor: "#F5DDD1",
  },
  {
    icon: "🌱",
    title: "Rana intervencija",
    description:
      "Program za decu od 0–3 godine za pravilan govorno-jezički razvoj od najranijeg uzrasta.",
    bgColor: "#D4E4D1",
  },
  {
    icon: "🎯",
    title: "Terapija artikulacije",
    description:
      "Korekcija izgovora glasova kroz individualne vežbe prilagođene uzrastu deteta.",
    bgColor: "#E6D5C3",
  },
  {
    icon: "📖",
    title: "Disleksija i disgrafija",
    description:
      "Programi za prepoznavanje i tretman teškoća u čitanju i pisanju.",
    bgColor: "#f5d5c5",
  },
  {
    icon: "💬",
    title: "Online terapija",
    description:
      "Logopedske sesije putem video poziva — dostupne porodicama širom Srbije.",
    bgColor: "#D4E4D1",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Savetovanje roditelja",
    description:
      "Edukacija i podrška roditeljima za stimulaciju govora kod kuće.",
    bgColor: "#F5DDD1",
  },
];
