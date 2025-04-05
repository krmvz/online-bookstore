// typescript learning

let age: number | string = 20;

age = "30";

const name: string = "John";

const isStudent: boolean = true;

function getPersonInfo(
  hisName: string,
  hisAge: string,
  isHeStudent: string | boolean
) {
  return `Name: ${hisName}, Age: ${hisAge}, Student: ${isHeStudent}`;
}

getPersonInfo(name, age, isStudent);

// если у он студент то верни ему скидку в 20%
// иначе верни null
function checkPermission(isHeStudent: boolean): number | null {
  if (isHeStudent) {
    return 20;
  } else {
    return null;
  }
}

// type

// interface

type Gender = "male" | "female" | "other";

interface User {
  id: string;
  name: string;
  age: number;
  isStudent: boolean;
  gender: Gender;
}

const user: User = {
  id: "32332",
  name: "John",
  age: 20,
  isStudent: true,
  gender: "male",
};

console.log(user);

checkPermission(isStudent);

interface Wish {
  text: string;
  emoji: string;
}

const newWishData: Wish = {
  text: "",
  emoji: "",
};

function setNewWishData(data: Wish) {
  newWishData.text = data.text;
  newWishData.emoji = data.emoji;
}

// полный набор данных
setNewWishData({ text: "дом", emoji: "🏠" });

// partial
const newEmoji = "🚗";

setNewWishData({ emoji: newEmoji, text: newWishData.text });

setNewWishData({ ...newWishData, emoji: newEmoji });
