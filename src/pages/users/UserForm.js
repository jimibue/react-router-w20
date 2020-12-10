import { useState } from "react";
import useFormInput from "../../hooks/useFormInput";
const { Header, Form } = require("semantic-ui-react");

const UserForm = ({ user, updateUserHandler }) => {
  const email = useFormInput(user.email, "email");
  const firstName = useFormInput(user.first_name, "first name");
  const lastName = useFormInput(user.last_name, "last name");
  const avatar = useFormInput(user.avatar, "avatar");

  const handleSubmit = (e) => {
    console.log(email.value);
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(avatar.value);
    updateUserHandler({
      email: email.value,
      first_name: firstName.value,
      last_name: lastName.value,
      avatar: avatar.value,
    });
  };
  return (
    <>
      <Header>UserForm</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input {...email} required />
        <Form.Input {...firstName} />
        <Form.Input {...lastName} />
        <Form.Input {...avatar} />
        <Form.Button>submit</Form.Button>
      </Form>
    </>
  );
};

export default UserForm;
