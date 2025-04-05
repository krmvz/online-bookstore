const users: User[] = [
  { 
    id: "1", 
    name: "Окуучу кыз", 
    price: 490, 
    city: "Dushanbe" ,
    author: "Tara Westover"
    Publisher:
    Publication Year: 2021
Series: None
Category: Novels
Number of Pages: 495
Format: 125x200
Binding: Hardcover
ISBN: 978-9967-486-51-5
Print Run: -
Age Restriction: 16+
Language: Kyrgyz
Title in Another Language: Educated. Betray to Find Yourself
Article Number: BH-160583
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
