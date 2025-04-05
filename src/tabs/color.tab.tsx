function ColorTab({
  color,
  setColor,
}: {
  color: string;
  setColor: (color: string) => void;
}) {
  return (
    <>
      <h1>Цвет шрифта на странице!</h1>


      <a href="/contact.html">Contact</a>

      <input
        type="color"
        value={color}
        onChange={(event) => {
          const newValue = event.target.value;
          setColor(newValue);
        }}
      />
    </>
  );
}

export { ColorTab };
