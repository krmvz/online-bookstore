const users: User[] = [
  { 
    id: "1", 
    name: "Окуучу кыз", 
    price: 490, 
    author: "Тара Вестовер",
    publisher: "Оку",
    publication_year: 2021,
    series: null,
    Category: Novels
    Number of Pages: 495
    Format: 125x200
    Binding: Hardcover
    ISBN: 978-9967-486-51-5
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
  author: string;
  publisher: string;
  publication_year: number;
  series: number;
  category: string;
  number_of_pages: number;
  format: string;
  binding: string;
  
}

export { users };

export type { User };
