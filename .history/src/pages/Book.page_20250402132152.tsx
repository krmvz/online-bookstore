import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { User, users } from "../data/books.data";
// import { MainMenu } from "../menu/main.menu";

function UserPage() {
  const { id } = useParams();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const findedUser = users.find((item) => item.id === id);

    setUser(findedUser || null);
  }, [id]);

  return (
    <div>
      <h1>Book Page</h1>
      {user ? (
        <p>
          {user.name},
          {user.price} som,
          {user.author},
          {user.publi},
          {user.author}
          {user.author}
          {user.author}
          {user.author}
          {user.author}
          {user.author}
          {user.author}
          {user.author}
          {user.author}
        </p>
      ) : (
        <p>Юзер не найден</p>
      )}
    </div>
  );
}

export { UserPage };
