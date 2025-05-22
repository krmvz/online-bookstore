interface Book {
  id: string;
  name: string;
  author: string;
  category: string;
  ISBN: string;
  language: string;
  image: string;
  availability: StoreAvailability[];
}

interface StoreAvailability {
  storeId: string;
  storeName: string;
  price: number;
  inStock: boolean;
  quantity?: number;
}

const books: Book[] = [
  { 
    id: "1", 
    name: "Окуучу кыз",
    author: "Тара Вестовер",
    category: "Роман",
    ISBN: "978-9967-486-51-5",
    language: "Кыргызча",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNF8kjmu2y8Bc56s91pt2hwe20rW_XGAw7sw&s",
    availability: [
      {
        storeId: "store1",
        storeName: "Book House",
        price: 490,
        inStock: true,
        quantity: 5
      },
      {
        storeId: "store2",
        storeName: "Raritet",
        price: 500,
        inStock: true,
        quantity: 3
      }
    ]
  },
  {
    id: "2",
    name: "Поллианна",
    author: "Элинор Портер",
    category: "Классика",
    ISBN: "978-9967-486-50-85654",
    language: "Кыргызча",
    image: "https://bookhouse.kg/media/galleryphoto/2022/2/4627d0da-8eef-4956-9c4e-256f313f6740.jpg.600x780_q94.jpg",
    availability: [
      {
        storeId: "store1",
        storeName: "Book House",
        price: 250,
        inStock: true,
        quantity: 10
      }
    ]
  }
];

export { books };
export type { Book, StoreAvailability };