export type Project = {
  emoji: string;
  title: string;
  repo: string;        // "username/repo-name"
  live: string;        // "" if not deployed yet
  description: string;
  tags: string[];
  gradient: string;    // Tailwind gradient classes for the thumbnail
};

export const PROJECTS_DATA: Project[] = [
  {
    emoji: "✅",
    title: "Focusly",
    repo: "zeta0106/To-Do-List",
    live: "https://focusly-bice-ten.vercel.app/",
    description:
      "A clean, minimalist task manager. Add, complete, and remove tasks with a focus on simplicity and zero-friction productivity.",
    tags: ["JavaScript", "HTML", "CSS"],
    gradient: "from-emerald-100 via-teal-50 to-sky-100",
  },
  {
    emoji: "☕",
    title: "JAVA ATM",
    repo: "zeta0106/JAVA_ATM",
    live: "",
    description:
      "An OOP-based ATM banking simulator built in Java. Features account creation, deposits, withdrawals, and transaction history.",
    tags: ["Java", "OOP", "Console"],
    gradient: "from-amber-100 via-orange-50 to-rose-100",
  },
  {
    emoji: "🚻",
    title: "HK Toilet Rating",
    repo: "zeta0106/hk-toilet-rating",
    live: "https://zeta0106.github.io/hk-toilet-rating/",
    description:
      "Rate and review public toilets across Hong Kong. A community-driven map for finding the cleanest restroom near you.",
    tags: ["Web", "Map", "Community"],
    gradient: "from-sky-100 via-indigo-50 to-violet-100",
  },
  {
    emoji: "🧠",
    title: "Smart Flashcards",
    repo: "zeta0106/smart-flashcards",
    live: "https://zeta0106.github.io/smart-flashcards/",
    description:
      "A spaced-repetition study companion. Create decks, review intelligently, and remember more in less time.",
    tags: ["React", "Study", "AI"],
    gradient: "from-fuchsia-100 via-pink-50 to-rose-100",
  },
  {
    emoji: "🦐",
    title: "SeaFood Restaurant",
    repo: "zeta0106/My-First-Website---SeaFood-Restaurant",
    live: "https://my-first-website-sea-food-restauran.vercel.app/",
    description:
      "My very first website — a static landing page for a fictional seafood restaurant. The project that started it all.",
    tags: ["HTML", "CSS", "First Project"],
    gradient: "from-rose-100 via-orange-50 to-amber-100",
  },
];