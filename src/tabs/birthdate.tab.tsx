import { useEffect, useState } from "react";
import dayjs from "dayjs";

function BirthdateTab({ color }: { color: string }) {
  const [birthday, setBirthday] = useState(dayjs("2000-11-27"));
  
  const [diff, setDiff] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  function howManyILived() {
    const today = dayjs();

    const diffDays = today.diff(birthday, "days");
    const diffHours = today.diff(birthday, "hours");
    const diffMinutes = today.diff(birthday, "minutes");

    setDiff({ days: diffDays, hours: diffHours, minutes: diffMinutes });
  }

  useEffect(() => {
    howManyILived();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [birthday])

  return (
    <>
      <h1>День рождения!</h1>
      <input
        value={birthday.format("YYYY-MM-DD")}
        onChange={(event) => {
          const newValue = event.target.value;
          setBirthday(dayjs(newValue));
        }}
        type="date"
        style={{
          padding: "20px",
          fontSize: "2rem",
          color: color,
          borderColor: color,
          fontFamily: "sans-serif",
          margin: "10px 0",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        <button
          style={{ backgroundColor: color, color: "#fff" }}
          onClick={() => {
            setBirthday(birthday.add(1, "day"));
          }}
        >
          ⊕ день
        </button>
        <button
          style={{ backgroundColor: color, color: "#fff" }}
          onClick={() => {
            setBirthday(birthday.add(1, "month"));
          }}
        >
          ⊕ месяц
        </button>
        <button
          style={{ backgroundColor: color, color: "#fff" }}
          onClick={() => {
            setBirthday(birthday.add(1, "year"));
          }}
        >
          ⊕ год
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <button
          style={{ backgroundColor: color, color: "#fff" }}
          onClick={() => {
            setBirthday(birthday.add(-1, "day"));
          }}
        >
          ⊖ день
        </button>
        <button
          style={{ backgroundColor: color, color: "#fff" }}
          onClick={() => {
            setBirthday(birthday.add(-1, "month"));
          }}
        >
          ⊖ месяц
        </button>
        <button
          style={{ backgroundColor: color, color: "#fff" }}
          onClick={() => {
            setBirthday(birthday.add(-1, "year"));
          }}
        >
          ⊖ год
        </button>
      </div>
      <p style={{ fontSize: "2rem" }}>🥳 {birthday.format("DD MMMM YYYY")}</p>
      <div>
        <button onClick={howManyILived}>Сколько я прожил</button>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <p>Прожито дней: {diff.days}</p>
          <p>Прожито часов: {diff.hours}</p>
          <p>Прожито минут: {diff.minutes}</p>
        </div>
      </div>
    </>
  );
}

export { BirthdateTab };
