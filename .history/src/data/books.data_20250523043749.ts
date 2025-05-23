import { Book, BookStore } from './book';

// Store information
const stores: BookStore[] = [
  {
    id: "bookhouse",
    name: "Book House",
    location: {
      address: "Чүй проспекти, 114",
      coordinates: {
        lat: 42.8746,
        lng: 74.5698
      }
    },
    workingHours: {
      open: "09:00",
      close: "18:00"
    },
    contacts: {
      phone: "+996 312 66 20 37",
      email: "info@bookhouse.kg"
    },
    rating: 4.5,
    reviews: 128
  },
  {
    id: "raritet",
    name: "Раритет",
    location: {
      address: "Киев көчөсү, 218",
      coordinates: {
        lat: 42.8712,
        lng: 74.5923
      }
    },
    workingHours: {
      open: "10:00",
      close: "19:00"
    },
    contacts: {
      phone: "+996 312 66 20 38",
      email: "info@raritet.kg"
    },
    rating: 4.7,
    reviews: 156
  },
  {
    id: "oku-kg",
    name: "Oku.kg",
    location: {
      address: "Токтогул көчөсү, 178",
      coordinates: {
        lat: 42.8712,
        lng: 74.5845
      }
    },
    workingHours: {
      open: "09:00",
      close: "20:00"
    },
    contacts: {
      phone: "+996 312 979797",
      email: "info@oku.kg"
    },
    rating: 4.8,
    reviews: 203
  },
  {
    id: "bugupress",
    name: "Bugupress",
    location: {
      address: "Манас көчөсү, 40",
      coordinates: {
        lat: 42.8734,
        lng: 74.5912
      }
    },
    workingHours: {
      open: "09:30",
      close: "19:30"
    },
    contacts: {
      phone: "+996 312 45 23 67",
      email: "info@bugupress.kg"
    },
    rating: 4.6,
    reviews: 89
  },
  {
    id: "didar",
    name: "Didar",
    location: {
      address: "Байтик Баатыр көчөсү, 75",
      coordinates: {
        lat: 42.8689,
        lng: 74.5867
      }
    },
    workingHours: {
      open: "10:00",
      close: "20:00"
    },
    contacts: {
      phone: "+996 312 56 78 90",
      email: "contact@didar.kg"
    },
    rating: 4.4,
    reviews: 112
  }
];

const books: Book[] = [
  {
    id: "1",
    isbn: "978-9967-486-51-5",
    title: "Окуучу кыз",
    author: "Тара Вестовер",
    description: "Колуңуздагы китеп диний фанаттын үйүндө төрөлгөн жана заманбап илим-билимди жек көрүү сезими менен тарбияланган кыз жөнүндө...",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNF8kjmu2y8Bc56s91pt2hwe20rW_XGAw7sw&s",
    category: "Роман",
    language: "Кыргызча",
    publisher: "Оку",
    publishedDate: "2021",
    stores: [
      {
        store: stores[0],
        storeId: "bookhouse",
        price: 490,
        inStock: true,
        quantity: 5,
        lastUpdated: new Date().toISOString()
      },
      {
        store: stores[1],
        storeId: "raritet",
        price: 500,
        inStock: true,
        quantity: 3,
        lastUpdated: new Date().toISOString()
      },
      {
        store: stores[2],
        storeId: "oku-kg",
        price: 480,
        inStock: true,
        quantity: 4,
        lastUpdated: new Date().toISOString()
      },
      {
        store: stores[3],
        storeId: "bugupress",
        price: 495,
        inStock: true,
        quantity: 6,
        lastUpdated: new Date().toISOString()
      },
      {
        store: stores[4],
        storeId: "didar",
        price: 485,
        inStock: true,
        quantity: 4,
        lastUpdated: new Date().toISOString()
      }
    ]
  },
  {
    id: "2",
    isbn: "978-9967-486-50-85654",
    title: "Саманчынын жолу",
    author: "Чыңгыз Айтматов",
    description: "Бул китепти залкар жазуучу Ч. Айтматовдун дүйнөнүн 100дөн ашык тилдерине которулган \"Саманчынын жолу\" повести киргизилди.",
    imageUrl: "https://bookhouse.kg/media/galleryphoto/2021/12/d38b7e59-96c6-4df6-9128-1b25cd00ef31.jpg.600x780_q94.jpg",
    category: "Классика",
    language: "Кыргызча",
    publisher: "Оку",
    publishedDate: "2021",
    stores: [
      {
        store: stores[0],
        storeId: "bookhouse",
        price: 170,
        inStock: true,
        quantity: 10,
        lastUpdated: new Date().toISOString()
      },
      {
        store: stores[1],
        storeId: "raritet",
        price: 185,
        inStock: true,
        quantity: 7,
        lastUpdated: new Date().toISOString()
      },
      {
        store: stores[2],
        storeId: "oku-kg",
        price: 175,
        inStock: true,
        quantity: 8,
        lastUpdated: new Date().toISOString()
      }
    ]
  },
  {
    id: "3",
    isbn: "978-9967-486-52-2",
    title: "Жамийла",
    author: "Чыңгыз Айтматов",
    description: "Чыңгыз Айтматовдун бул чыгармасы дүйнөлүк адабияттын классикасына айланган. Согуш мезгилиндеги айылдагы сүйүү окуясы жөнүндө баяндайт.",
    imageUrl: "https://fantlab.ru/images/editions/orig/200832?r=1496027423",
    category: "Классика",
    language: "Кыргызча",
    publisher: "Турар",
    publishedDate: "2022",
    stores: [
      {
        store: stores[0],
        storeId: "bookhouse",
        price: 220,
        inStock: true,
        quantity: 15,
        lastUpdated: new Date().toISOString()
      },
      {
        store: stores[1],
        storeId: "raritet",
        price: 200,
        inStock: true,
        quantity: 8,
        lastUpdated: new Date().toISOString()
      },
      {
        store: stores[2],
        storeId: "oku-kg",
        price: 210,
        inStock: true,
        quantity: 6,
        lastUpdated: new Date().toISOString()
      }
    ]
  },
  {
    id: "4",
    isbn: "978-9967-486-53-9",
    title: "Ак кеме",
    author: "Чыңгыз Айтматов",
    description: "Бул повестте жети жашар баланын тагдыры аркылуу адамдык асыл сапаттар, үмүт жана ишеним темалары козголот.",
    imageUrl: "https://bookhouse.kg/media/galleryphoto/2019/9/c7761f15-1144-4f64-929e-472450a1cd72.jpg.600x780_q94.jpg",
    category: "Классика",
    language: "Кыргызча",
    publisher: "Турар",
    publishedDate: "2022",
    stores: [
      {
        store: stores[0],
        storeId: "bookhouse",
        price: 250,
        inStock: true,
        quantity: 12,
        lastUpdated: new Date().toISOString()
      },
      {
        store: stores[1],
        storeId: "raritet",
        price: 240,
        inStock: true,
        quantity: 6,
        lastUpdated: new Date().toISOString()
      },
      {
        store: stores[2],
        storeId: "oku-kg",
        price: 245,
        inStock: true,
        quantity: 5,
        lastUpdated: new Date().toISOString()
      }
    ]
  },
  {
    id: "5",
    isbn: "978-9967-486-54-6",
    title: "Биринчи мугалим",
    author: "Чыңгыз Айтматов",
    description: "Советтик доордун алгачкы жылдарында алыскы айылга келген жаш мугалимдин окуучуларды билим алууга үндөгөн аракеттери жөнүндөгү повесть.",
    imageUrl: "https://bookhouse.kg/media/galleryphoto/2024/6/17fe5b61-03c1-496c-92bb-9a308085aee2.JPG.600x780_q94.jpg",
    category: "Классика",
    language: "Кыргызча",
    publisher: "Турар",
    publishedDate: "2022",
    stores: [
      {
        store: stores[0],
        storeId: "bookhouse",
        price: 180,
        inStock: true,
        quantity: 20,
        lastUpdated: new Date().toISOString()
      },
      {
        store: stores[1],
        storeId: "raritet",
        price: 195,
        inStock: true,
        quantity: 9,
        lastUpdated: new Date().toISOString()
      },
      {
        store: stores[2],
        storeId: "oku-kg",
        price: 185,
        inStock: true,
        quantity: 7,
        lastUpdated: new Date().toISOString()
      }
    ]
  }

];

export { books, stores };