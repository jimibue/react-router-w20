import Axios from "axios";
import { useState, useEffect } from "react"; //es6 way
import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    Axios.get("https://reqres.in/api/users?delay=1")
      .then((res) => {
        setUsers(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const renderUsers = () => {
    return users.map((u) => (
      <Link to={`/users/${u.id}`}>
        <h1 key={u.id}>{u.email}</h1>
      </Link>
    ));
  };

  if (loading) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error Occured</h1>
      </div>
    );
  }

  return (
    <>
      <Header>Users</Header>
      {renderUsers()}
    </>
  );
};

export default Users;
