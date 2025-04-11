interface Book {
  id: string;
  name: string;
  price: number;
  e_price: number;
  audio_price: number;
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
  image: string;
  promotion: number;
  active: boolean;
  new: boolean;
}

const books: Book[] = [
  { 
    id: "1", 
    name: "Окуучу кыз", 
    price: 490, 
    e_price: 155,
    audio_price: 90,
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNF8kjmu2y8Bc56s91pt2hwe20rW_XGAw7sw&s",
    promotion: 0,
    active: true,
    new: false,
  },
  { 
    id: "2", 
    name: "Поллианна", 
    price: 250, 
    e_price: 90,
    audio_price: 150,
    author: "Элинор Портер",
    publisher: "Оку",
    publication_year: 2022,
    series: "Жок",
    category: "Классика",
    number_of_pages: 180,
    format: "20x12.5",
    binding: "Жумшак мукаба",
    ISBN: "978-9967-486-50-85654",
    age_restriction: 9,
    language: "Кыргызча",
    title_in_another_language: "Поллианна",
    article_number: "BH-160780",
    short_info_about_book: "Дүйнөлүк балдар адабиятынын «Алтын казынасына» кирген Поллианна романынын жазылганына жүз жылдан ашты. Анын автору Элинор Портердин эстелигинде «миллиондогон жүрөктөргө жарык чачты» деген жазуу бар. Бир кылымдан бери көптөгөн тилдерге которулуп, окурмандар тарабынан сүйүлүп окулуп келаткан, элдин жүрөгүнөн түнөк тапкан бул чыгарманын сыры эмнеде? Дүйнөлүк классикалык адабияттардын катарын толуктаган «Поллианна» чыгармасы кыргыз тилинде алгачкы ирет жарык көрүүдө. Китеп мектеп окуучуларынан тартып бардык окурмандарга арналат.",
    rating: 5,
    country_category: "world",
    image: "https://bookhouse.kg/media/galleryphoto/2022/2/4627d0da-8eef-4956-9c4e-256f313f6740.jpg.600x780_q94.jpg",
    promotion: 0,
    active: true,
    new: false,
  },
  { 
    id: "3", 
    name: "Баламды кантип тарбиялайм?", 
    price: 360, 
    e_price: 150,
    audio_price: 90,
    author: "Айгерим Туракулова",
    publisher: "Оку",
    publication_year: 2020,
    series: "Жок",
    category: "Тарбия",
    number_of_pages: 495,
    format: "125x200",
    binding: "Сырты катуу",
    ISBN: "978-9967-486-51-5",
    age_restriction: 16,
    language: "Кыргызча",
    title_in_another_language: "How to raise my child?",
    article_number: "BH-160583",
    short_info_about_book: "Казак педагогу Айгерим Туракулованын калемине таандык бул китепте бала тарбиясына тиешелүү темалар, анын ичинде бала менен болгон мамиле, анын достору, күнүмдүк эрежелери, наристе кезинен тартып, эрезеге жеткенге чейинки маселелери жана аны чечүүнүн ыкмалары, жолдору кеңири баяндалган. Китеп жалпы ата-энелерге, тарбиячыларга жана агартуучуларга арналат.",
    rating: 4.8,
    country_category: "local",
    image: "https://bookhouse.kg/media/galleryphoto/2022/4/0d00883e-5461-4c0c-92a5-180f62c3f6d8.jpg.600x780_q94.jpg",
    promotion: 0,
    active: false,
    new: true,
  },
  {
    id: "4",
    name: "Саманчынын жолу",
    price: 170,
    e_price: 0,
    audio_price: 0,
    author: "Чыңгыз Айтматов",
    publisher: "Оку",
    publication_year: 2021,
    series: "Жок",
    category: "Классика",
    number_of_pages: 135,
    format: "21x13",
    binding: "Катуу мукаба",
    ISBN: "978-9967-486-50-8000",
    age_restriction: 0,
    language: "Кыргызча",
    title_in_another_language: "-",
    article_number: "BH-160773",
    short_info_about_book: "Бул китепти залкар жазуучу Ч. Айтматовдун дүйнөнүн 100дөн ашык тилдерине которулган \"Саманчынын жолу\" повести киргизилди.",
    rating: 4.9,
    country_category: "local",
    image: "https://bookhouse.kg/media/galleryphoto/2021/12/d38b7e59-96c6-4df6-9128-1b25cd00ef31.jpg.600x780_q94.jpg",
    promotion: 0,
    active: true,
    new: false
  },
  {
    id: "5",
    name: "Мусулман үй-бүлө",
    price: 440,
    e_price: 150,
    audio_price: 0,
    author: "Канатбек Аманбаев",
    publisher: "Дилазык",
    publication_year: 2019,
    series: "Жок",
    category: "Аял жана үй-бүлө",
    number_of_pages: 424,
    format: "21x13",
    binding: "Катуу мукаба",
    ISBN: "978-9967-9194-2-6",
    age_restriction: 16,
    language: "Кыргызча",
    title_in_another_language: "-",
    article_number: "BH-159818",
    short_info_about_book: "Колуңуздагы китепте үй-бүлө маселелери, тууган-уруктардын ортосундагы мамилелер жана карым-катнаштар камтылган. Ошону менен бирге мусулман эркек жана аялдын жеке жашоосундагы эрежелер, алардын коомдук жайлардагы жүрүм-туруму, кийим-кечеси тууралуу да айтылат. Китеп жалпы окурмандарга арналат.",
    rating: 5.0,
    country_category: "local",
    image: "https://bookhouse.kg/media/galleryphoto/2019/7/d513638b-6883-4b05-9d05-31348c3a2b41.jpg.360x460_q94.jpg",
    promotion: 0,
    active: true,
    new: false
  },
  {
    id: "7",
    name: "Айбан чарба",
    price: 250,
    e_price: 90,
    audio_price: 0,
    author: "Оруэлл Джордж",
    publisher: "Оку",
    publication_year: 2022,
    series: "Жок",
    category: "Классика",
    number_of_pages: 152,
    format: "21x12",
    binding: "Жумшак мукаба",
    ISBN: "978-9967-486-26-3",
    age_restriction: 9,
    language: "Кыргызча",
    title_in_another_language: "Animal Farm",
    article_number: "BH-160782",
    short_info_about_book: "Бул каймана мааниде жазылган чыгарма диктаторлукту, анын кантип пайда болуп, кайра кантип өнүгүп жүрүп отурарын таасын чагылдырат. Чыгарма жаныбарлар тууралуу жазылгандыктан, балдардан тартып, чоңдорго чейин кызыктуу жана жалпы окурмандарга арналат",
    rating: 4.9,
    country_category: "world",
    image: "https://bookhouse.kg/media/galleryphoto/2022/2/1_2.jpg.600x780_q94.jpg",
    promotion: 0,
    active: true,
    new: true
  }
];

export { books };
export type { Book };