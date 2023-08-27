import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../api";

const UserDetailPage = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    const user = await getUserById(id);
    setUser(user);
  };
  const { firstName, lastName, image, gender } = user;
  return (
    <div>
      <img src={image} alt={firstName} />
      <h3>
        {firstName} {lastName}
      </h3>
      <p>{gender}</p>
    </div>
  );
};

export default UserDetailPage;
