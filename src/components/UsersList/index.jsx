import { useEffect, useState } from "react";
import { getUsers } from "../../api";
import { useStateContext } from "../../context";
import { NavLink } from "react-router-dom";
import { List } from "./userList.styled";

const STATUS = {
  idle: "idle",
  pending: "pending",
  rejected: "rejected",
  fulfilled: "fulfilled",
};
const UsersList = () => {
  const { searchParams } = useStateContext();

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [status, setStatus] = useState(STATUS.idle);

  const searchQuery = searchParams.get("query") || "";

  useEffect(() => {
    fetchUsers({ page: 1, name: "", limit: 10 });
  }, []);

  useEffect(() => {
    setPage(1);
    setUsers([]);

    fetchUsers({ name: searchQuery, limit: 10, page });
  }, [searchQuery, page]);

  const fetchUsers = async ({ name, limit, page }) => {
    setStatus(STATUS.pending);
    try {
      const { users, totalPages } = await getUsers({ name, limit, page });

      setStatus(STATUS.fulfilled);
      setUsers((prevState) => [...prevState, ...users]);
      setTotalPages(totalPages);
    } catch (error) {
      setStatus(STATUS.rejected);
    }
  };

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  if (status === STATUS.pending) {
    return <div>Loading...</div>;
  }

  if (status === STATUS.fulfilled) {
    const isButtonShow = totalPages - 1 >= page && users.length;

    return (
      <>
        {!users.length ? (
          <div>NO matches found</div>
        ) : (
          <List>
            {users.map(({ firstName, lastName, image, _id }) => {
              return (
                <li key={_id}>
                  <h3>
                    {firstName} {lastName}{" "}
                  </h3>
                  <img src={image} alt={`${firstName} ${lastName} `} />
                  <NavLink to={`/users/${_id}`}>SHOW MORE</NavLink>
                </li>
              );
            })}
          </List>
        )}
        {isButtonShow ? (
          <button onClick={handleLoadMore}>Load more</button>
        ) : null}
      </>
    );
  }

  if (status === STATUS.rejected) {
    return <div>ERROR!!!</div>;
  }
};

export default UsersList;
