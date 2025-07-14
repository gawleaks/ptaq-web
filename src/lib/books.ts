export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  coverImage: string;
  description: string;
  ageGroup: "3+" | "6+" | "uczy";
}

// Mock data for PTAQ 3+ series
export const ptaq3PlusBooks: Book[] = [
  {
    id: "ptaq3-1",
    title: "Wróbelek Ćwirka",
    subtitle: "Pierwsza przygoda",
    coverImage: "/api/placeholder/300/400",
    description:
      "Poznaj małego wróbelka Ćwirkę, który uczy się latać i odkrywa tajemnice swojego podwórka.",
    ageGroup: "3+",
  },
  {
    id: "ptaq3-2",
    title: "Sikorka i Zima",
    subtitle: "Opowieść o przetrwaniu",
    coverImage: "/api/placeholder/300/400",
    description:
      "Jak mała sikorka radzi sobie w zimie? Historia o przyjaźni i pomocy.",
    ageGroup: "3+",
  },
  {
    id: "ptaq3-3",
    title: "Kaczuszka Kwa-Kwa",
    subtitle: "Przygody nad stawem",
    coverImage: "/api/placeholder/300/400",
    description:
      "Wesoła kaczuszka uczy dzieci o życiu nad wodą i znajdowaniu przyjaciół.",
    ageGroup: "3+",
  },
  {
    id: "ptaq3-4",
    title: "Bocian Długonogi",
    subtitle: "Podróż na południe",
    coverImage: "/api/placeholder/300/400",
    description:
      "Fascynująca opowieść o wędrówce bocianów i tym, jak znajdują drogę do domu.",
    ageGroup: "3+",
  },
  {
    id: "ptaq3-5",
    title: "Sowa Puchusia",
    subtitle: "Nocne przygody",
    coverImage: "/api/placeholder/300/400",
    description: "Mądra sowa opowiada o nocnym życiu lasu i jego mieszkańcach.",
    ageGroup: "3+",
  },
];

// Mock data for PTAQ 6+ series
export const ptaq6PlusBooks: Book[] = [
  {
    id: "ptaq6-1",
    title: "Tajemnice Orlich Gniazd",
    subtitle: "Wielka ekspedycja",
    coverImage: "/api/placeholder/300/400",
    description:
      "Młodzi odkrywcy wyruszają na poszukiwanie orlich gniazd w górach. Przygoda pełna wiedzy o drapieżnikach.",
    ageGroup: "6+",
  },
  {
    id: "ptaq6-2",
    title: "Klub Młodych Ornitologów",
    subtitle: "Pierwsza wyprawa",
    coverImage: "/api/placeholder/300/400",
    description:
      "Grupa dzieci zakłada klub miłośników ptaków i wyrusza na pierwszą naukową ekspedycję.",
    ageGroup: "6+",
  },
  {
    id: "ptaq6-3",
    title: "Ptaki Miasta",
    subtitle: "Przewodnik miejski",
    coverImage: "/api/placeholder/300/400",
    description:
      "Odkryj jakie ptaki mieszkają w mieście i jak można im pomóc. Praktyczny przewodnik dla młodych obserwatorów.",
    ageGroup: "6+",
  },
  {
    id: "ptaq6-4",
    title: "Migracja Żurawi",
    subtitle: "Podniebna podróż",
    coverImage: "/api/placeholder/300/400",
    description:
      "Śledź żurawie podczas ich długiej podróży z północy na południe. Naukowa przygoda o orientacji ptaków.",
    ageGroup: "6+",
  },
  {
    id: "ptaq6-5",
    title: "Ptasie Koncerty",
    subtitle: "Symfonia natury",
    coverImage: "/api/placeholder/300/400",
    description:
      "Naucz się rozpoznawać ptaki po ich śpiewie. Interaktywny przewodnik dźwięków natury.",
    ageGroup: "6+",
  },
  {
    id: "ptaq6-6",
    title: "Budowanie Gniazd",
    subtitle: "Ptasie architektury",
    coverImage: "/api/placeholder/300/400",
    description:
      "Jak ptaki budują swoje domy? Fascynująca książka o różnych technikach budowy gniazd.",
    ageGroup: "6+",
  },
];
