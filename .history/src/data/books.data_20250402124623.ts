const users: User[] = [
  { id: "1", name: "Окуучу кыз", price: 490 sp,, city: "Dushanbe" },
  { id: "2", name: "Alex", price: 20, city: "Bishkek" },
  { id: "3", name: "Arnold", price: 28, city: "Tashkent" },
];

interface User {
  id: string;
  name: string;
  price: number;
  city: string;
}

export { users };

export type { User };
