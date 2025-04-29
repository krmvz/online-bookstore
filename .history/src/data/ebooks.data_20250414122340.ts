interface Ebook {
    id: string;
    name: string;
    author: string;
    price: number;
    image: string;
    category: string;
    fileSize: string;
    format: string;
    language: string;
    description: string;
    previewUrl?: string;
  }
  
  export const ebooks: Ebook[] = [
    {
      id: "ebook-1",
      name: "Манас",
      author: "Манастын жомокчулары",
      price: 200,
      image: "/books/manas.jpg",
      category: "Эпос",
      fileSize: "2.4 MB",
      format: "PDF",
      language: "Кыргызча",
      description: "Кыргыз элинин улуу эпосу"
    },
    // Add more ebooks...
  ];