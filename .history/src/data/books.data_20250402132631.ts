const users: User[] = [
  { 
    id: "1", 
    name: "Окуучу кыз", 
    price: 490, 
    author: "Тара Вестовер",
    publisher: "Оку",
    publication_year: 2021,
    series: "Жок",
    category: "Роман",
    number_of_pages: 495,
    format: "125x200",
    binding: "Сырты катуу",
    ISBN: "978-9967-486-51-5",
    age_restriction: 16,
    language: "Кыргызча",
    title_in_another_language: "Educated. Betray to Find Yourself",
    article_number: "BH-160583",
    short_info_about_book: "Колуңуздагы китеп диний фанаттын үйүндө төрөлгөн жана заманбап илим-билимди жек көрүү сезими менен тарбияланган кыз жөнүндө. Үй-бүлөдө жана коомдо кимдер гана жардам бергени, кимдер гана бут тоскону кадимки турмуштагы окуялардын ичинде, насаатчынын эмес, окуянын каарманынын тили менен жазылган.",
    rating: 4.8,
    country_category: "world",
    image_link: ""
  },
  { 
    id: "2", 
    name: "Баламды кантип тарбиялайм?", 
    price: 360, 
    author: "Айгерим Туракулова",
    publisher: "Оку",
    publication_year: 2020,
    series: "Жок",
    category: "Роман",
    number_of_pages: 495,
    format: "125x200",
    binding: "Сырты катуу",
    ISBN: "978-9967-486-51-5",
    age_restriction: 16,
    language: "Кыргызча",
    title_in_another_language: "Educated. Betray to Find Yourself",
    article_number: "BH-160583",
    short_info_about_book: "Колуңуздагы китеп диний фанаттын үйүндө төрөлгөн жана заманбап илим-билимди жек көрүү сезими менен тарбияланган кыз жөнүндө. Үй-бүлөдө жана коомдо кимдер гана жардам бергени, кимдер гана бут тоскону кадимки турмуштагы окуялардын ичинде, насаатчынын эмес, окуянын каарманынын тили менен жазылган.",
    rating: 4.8,
    country_category: "world"
  },
];
interface User {
  id: string;
  name: string;
  price: number;
  author: string;
  publisher: string;
  publication_year: number;
  series: string;
  category: string;
  number_of_pages: number;
  format: string;
  binding: string;
  ISBN: string;
  age_restriction: number;
  language: string;
  title_in_another_language: string;
  article_number: string;
  short_info_about_book: string;
  rating: number;
  country_category: string;
  image: 
}

export { users };

export type { User };
