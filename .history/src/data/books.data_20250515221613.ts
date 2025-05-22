import { Book, BookAvailability } from './book';

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
    availability: [
      {
        storeId: "bookhouse",
        price: 490,
        inStock: true,
        quantity: 5,
        lastUpdated: new Date().toISOString()
      },
      {
        storeId: "raritet",
        price: 500,
        inStock: true,
        quantity: 3,
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
    availability: [
      {
        storeId: "bookhouse",
        price: 170,
        inStock: true,
        quantity: 10,
        lastUpdated: new Date().toISOString()
      }
    ]
  }
];

export { books };