import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { User, books } from "../data/books.data";
// import { MainMenu } from "../menu/main.menu";

function UserPage() {
  const { id } = useParams();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const findedUser = books.find((item) => item.id === id);

    setUser(findedUser || null);
  }, [id]);

  return (
    <div>
      <h1>Book Page</h1>
      {user ? (
        <p>
          Name of Book: {user.name} <br />
          Price: {user.price} сом<br />
          Author: {user.author}<br/>
          Publisher: {user.publisher} <br />
          Publication Year: {user.publication_year} <br />
          {user.author}
          <img src={user.image} alt="books image" />
        </p>
      ) : (
        <p>Юзер не найден</p>
      )}
    </div>
  );
}

export { UserPage };
