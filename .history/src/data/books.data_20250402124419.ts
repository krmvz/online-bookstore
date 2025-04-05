const users: User[] = [
  { id: "1", name: "Окуучу кыз", age: 25, city: "Dushanbe" },
  { id: "2", name: "Alex", age: 20, city: "Bishkek" },
  { id: "3", name: "Arnold", age: 28, city: "Tashkent" },
];

interface User {
  id: string;
  name: string;
  age: number;
  city: string;
}

export { users };

export type { User };
