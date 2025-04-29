export interface AudioBook {
    id: string;
    name: string;
    author: string;
    a_price: number;
    image: string;
    category: string;
    duration: string;
    language: string;
    description: string;
    narrator: string;
  }
  
  export const audiobooks: AudioBook[] = [
    {
      id: "audio-1",
      name: "Манас",
      author: "Жусуп Мамай",
      a_price: 399,
      image: "/books/manas.jpg",
      category: "Эпос",
      duration: "8 саат 30 мүнөт",
      language: "Кыргызча",
      description: "Кыргыз элинин баатырдык эпосу",
      narrator: "Азамат Уланов"
    },
    {
      id: "audio-2",
      name: "Кылым карытар бир күн",
      author: "Чыңгыз Айтматов",
      a_price: 349,
      image: "/books/kylym.jpg",
      category: "Роман",
      duration: "6 саат 15 мүнөт",
      language: "Кыргызча",
      description: "Чыңгыз Айтматовдун атактуу романы",
      narrator: "Бакыт Жумадилов"
    },
    {
      id: "audio-3",
      name: "Жамийла",
      author: "Чыңгыз Айтматов",
      a_price: 299,
      image: "/books/jamilya.jpg",
      category: "Повесть",
      duration: "3 саат 45 мүнөт",
      language: "Кыргызча",
      description: "Сүйүү жөнүндөгү классикалык чыгарма",
      narrator: "Айжан Асанова"
    }
  ];