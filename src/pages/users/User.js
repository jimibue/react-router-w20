import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import UserForm from "./UserForm";
const { Header, Button } = require("semantic-ui-react");

const User = (props) => {
  let [user, setUser] = useState({});
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(true);
  let history = useHistory();
  let { id } = useParams();

  // async await
  const getUser = async () => {
    try {
      let res = await Axios.get(`https://reqres.in/api/users/${id}`);
      // code pauses here and awaits for axios code to finish
      setUser(res.data.data);
      setLoading(false);
      console.log(res);
    } catch (err) {
      setLoading(false);
      setError(err.response.status);
    }
  };

  const updateUser = async (user) => {
    console.log("updateUser called");
    try {
      let res = await Axios.put(`https://reqres.in/api/users/${id}`, user);
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <Header>User</Header>
      <p>id from react router: {id}</p>
      <p>id from api call: {user.id}</p>
      <p>email from api call: {user.email}</p>
      <p>firstName from api call: {user.first_name}</p>
      <p>lastName from api call: {user.last_name}</p>
      <p>avatar from api call: {user.avatar}</p>

      <Button onClick={props.history.goBack}>Go Back 1</Button>
      <Button onClick={() => history.push("/")}>Home</Button>

      <UserForm user={user} updateUserHandler={updateUser} />
    </>
  );
};

export default User;
//try catch block
// try {
//can do anything I want and if an error is thrown
// } catch(err){
//   // err is going to be the err that was thrown
// }
