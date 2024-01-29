import { useEffect, useState } from "react";

// fetchUsers function from from styleguide
import { fetchUsers } from "@octosoft/styleguide";

type UserType = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

const Cards = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className="cards">
      {users?.map((user) => (
        <div className="card" key={user.id}>
          <div className="card__image">
            <img src={user.avatar} alt="pic" />
          </div>
          <div className="card__content">
            <h3 className="card__title">{user.name}</h3>
            <p className="card__text">{user.email}</p>
          </div>
          <div className="card__actions">
            <a
              href={`/dashboard/${window.encodeURIComponent(user.id)}`}
              title="Click to View User Dashboard"
              rel="noreferrer noopener"
              className="card_link"
            >
              View
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
