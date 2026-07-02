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
    description: "Видеопроект для корпоративной коммуникации, бренда или события.",
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
    description: "Визуальный проект для бренда, продукта или коммуникационной задачи.",
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
    description: "Видео и digital-контент под задачу бренда, эксперта или компании.",
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
    description: "Видеопроект о продукте, производстве, команде или бизнес-процессе.",
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
      "Корпоративный видеопроект для презентации, внутренней или внешней коммуникации.",
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
      "Видеоконтент для компании, производства, промышленного или инженерного направления.",
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
    description: "Видеопроект для бренда, команды или коммуникационной кампании.",
    thumbnail: "",
    videoEmbedUrl: "",
    externalVideoUrl: "",
    featured: false,
  },
];
