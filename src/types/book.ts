export interface Book {
  id?: string;
  title: string;
  author: string;
  price: number;
  description: string;
  coverImage: string;
  isbn?: string;
  language: string;
  publisher?: string;
  publishedDate?: string;
  pageCount?: number;
  categories: string[];
  available: boolean;
  rating?: number;
  reviews?: number;
}