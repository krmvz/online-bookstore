const users: User[] = [
  { 
    id: "1", 
    name: "Окуучу кыз", 
    price: 490, 
    city: "Dushanbe" ,
    author: "Tara Westover"
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
