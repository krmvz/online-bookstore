import { useState } from "react";

function RandomTab({ color }: { color: string }) {
  const [resultBoolean, setResultBoolean] = useState<boolean | null>(null);

  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [guessedNumber, setGuessedNumber] = useState(1);

  const [result, setResult] = useState(
    "Сгенерируйте число, а потом его угадывайте"
  );

  function generateRandomNumber() {
    // from 1 to 10
    const newRandomNumber = Math.floor(Math.random() * 10) + 1;

    console.log(newRandomNumber);

    setRandomNumber(newRandomNumber);

    return newRandomNumber;
  }

  function checkMyGuess() {
    if (randomNumber === null) {
      setResult("Сначала сгенерируйте число!");
      return;
    }

    if (guessedNumber === randomNumber) {
      setResult("Вы угадали! Правильным числом было: " + randomNumber);
      setResultBoolean(true);
    } else {
      setResult("Вы не угадали! Правильным числом было: " + randomNumber);
      setResultBoolean(false);
    }

    generateRandomNumber();
  }

  return (
    <>
      <h1>Угадай число!</h1>
      <span style={{ fontSize: "4rem" }}>
        {resultBoolean === true ? "👏🏼" : resultBoolean === false ? "😰" : null}
      </span>
      <p style={{ fontSize: "1.2rem" }}>{result}</p>
      <button
        onClick={generateRandomNumber}
        style={{ backgroundColor: "green", color: "#fff" }}
      >
        Сгенерерировать новое число
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "5px",
          marginTop: "10px",
        }}
      >
        <input
          value={guessedNumber}
          onChange={(event) => {
            const newValue = event.target.value;
            setGuessedNumber(Number(newValue));
          }}
          type="number"
          style={{
            width: "100px",
            padding: "5px",
            fontSize: "1.5rem",
            color: color,
          }}
          min={1}
          max={10}
        />
        <button
          style={{ backgroundColor: color, color: "#fff" }}
          onClick={checkMyGuess}
        >
          Проверить предположение
        </button>
      </div>
    </>
  );
}

export { RandomTab };
