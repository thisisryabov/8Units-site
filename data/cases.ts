export type CaseItem = {
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
  thumbnail: string;
  videoEmbedUrl: string;
  externalVideoUrl: string;
  featured: boolean;
};

export const cases: CaseItem[] = [
  {
    slug: "gazprom",
    title: "GAZPROM",
    client: "GAZPROM",
    category: "Corporate video",
    description:
      "Проект для крупной корпоративной коммуникации: задача, команда, производство и финальный материал для делового использования.",
    thumbnail: "",
    videoEmbedUrl: "",
    externalVideoUrl: "",
    featured: true,
  },
  {
    slug: "digniori-arts",
    title: "DIGNIORI ARTS",
    client: "DIGNIORI ARTS",
    category: "Brand film",
    description:
      "Брендовая история, где визуальный язык помогает точнее показать характер проекта, предмет и контекст.",
    thumbnail: "",
    videoEmbedUrl: "",
    externalVideoUrl: "",
    featured: true,
  },
  {
    slug: "nesterov",
    title: "NESTEROV",
    client: "NESTEROV",
    category: "Digital content",
    description:
      "Digital-формат для коммуникации с аудиторией: короткий путь от смысла к готовому материалу.",
    thumbnail: "",
    videoEmbedUrl: "",
    externalVideoUrl: "",
    featured: true,
  },
  {
    slug: "foodprod",
    title: "FOODPROD",
    client: "FOODPROD",
    category: "Production content",
    description:
      "Производственный контент о продукте, процессе и команде без лишней постановочности.",
    thumbnail: "",
    videoEmbedUrl: "",
    externalVideoUrl: "",
    featured: false,
  },
  {
    slug: "rbs",
    title: "RBS",
    client: "RBS",
    category: "Corporate video",
    description:
      "Материал для презентации, внутренней или внешней коммуникации, собранный вокруг конкретной задачи.",
    thumbnail: "",
    videoEmbedUrl: "",
    externalVideoUrl: "",
    featured: false,
  },
  {
    slug: "gidrosistema",
    title: "GIDROSISTEMA",
    client: "GIDROSISTEMA",
    category: "Industrial video",
    description:
      "Индустриальная история для компании, производства или инженерного направления с ясной структурой.",
    thumbnail: "",
    videoEmbedUrl: "",
    externalVideoUrl: "",
    featured: false,
  },
  {
    slug: "griffins",
    title: "GRIFFINS",
    client: "GRIFFINS",
    category: "Brand content",
    description:
      "Контент для бренда, команды или коммуникационной кампании: формат подбирается под задачу, а не наоборот.",
    thumbnail: "",
    videoEmbedUrl: "",
    externalVideoUrl: "",
    featured: false,
  },
  {
    slug: "events",
    title: "EVENTS",
    client: "EVENTS",
    category: "Event production",
    description:
      "Видео для событий, форумов, конференций и корпоративных мероприятий: от съемки и репортажа до итогового ролика и контента для коммуникаций.",
    thumbnail: "",
    videoEmbedUrl: "",
    externalVideoUrl: "",
    featured: false,
  },
];
