import { useState } from "react";

interface Wish {
  text: string;
  emoji: string;
}

function WishesTab({ color }: { color: string }) {
  const [wishes, setWishes] = useState<Wish[]>([
    { text: "машина", emoji: "🚗" },
    { text: "дерево", emoji: "🌲" },
    { text: "дом", emoji: "🏠" },
    { text: "кот", emoji: "🐱" },
  ]);

  const [newWishData, setNewWishData] = useState<Wish>({
    text: "",
    emoji: "",
  });

  function handleAddWish() {
    console.log(newWishData);

    setWishes([...wishes, newWishData]);
  }

  return (
    <>
      <h1>Желания!</h1>
      <form
        onSubmit={(e) => {
          handleAddWish();
          e.preventDefault();
        }}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "flex-start",
          }}
        >
          <label htmlFor="emoji">Эмоджи</label>
          <input
            value={newWishData.emoji}
            onChange={(e) => {
              const newTextValue = e.currentTarget.value;

              setNewWishData({ ...newWishData, emoji: newTextValue });
            }}
            id="emoji"
            type="text"
            style={{
              width: "60px",
              padding: "5px",
              fontSize: "1.1rem",
              color: color,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "flex-start",
          }}
        >
          <label htmlFor="text">Желание</label>
          <input
            value={newWishData.text}
            onChange={(e) => {
              const newTextValue = e.currentTarget.value;

              setNewWishData({ ...newWishData, text: newTextValue });
            }}
            id="text"
            type="text"
            style={{
              // width: "60px",
              padding: "5px",
              fontSize: "1.1rem",
              color: color,
            }}
          />
        </div>
        <button type="submit" style={{ backgroundColor: color, color: "#fff" }}>
          ⊕ желание
        </button>
      </form>

      <p>
        {wishes.map((wish, index) => (
          <b key={index} style={{ fontSize: "1.4rem", display: "block" }}>
            {wish.emoji} {wish.text}
          </b>
        ))}
      </p>
    </>
  );
}

export { WishesTab };
