const users: User[] = [
  { 
    id: "1", 
    name: "Окуучу кыз", 
    price: 490, 
    city: "Dushanbe" ,
    author: "Тара Вестовер"
  },
];

interface User {
  id: string;
  name: string;
  price: number;
  city: string;
}

export { users };

export type { User };
