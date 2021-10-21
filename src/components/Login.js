import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import validation from "./validation";
import { Link } from "react-router-dom";
import { CALL_API } from "../utils";

const initialvalues = {
  email: "",
  password: "",
};

export default function Login(props) {
  const [values, setValuse] = useState(initialvalues);
  console.log(props);

  const getData = (e) => {
    setValuse({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const submit_Data = async (e) => {
    e.preventDefault();
    const body = { email: values.email, password: values.password };
    if (!values.email) {
      alert("Enter emailId");

      return;
    }

    if (!values.password) {
      alert("Enter password");

      return;
    }
    try {
      const data = await CALL_API({ url: "login", body, method: "POST" });
      if (data) {
        window.localStorage.setItem("token", `Bearer ${data.token}`);
        props.history.push("/");
      }
      return;
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="container login_container">
      <Form onSubmit={submit_Data}>
        <h1>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={values.email}
            onChange={getData}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={values.password}
            onChange={getData}
            placeholder="Password"
          />
          <Form.Text className="text-muted">
            We'll never share your password with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <h5>
        {" "}
        Join Us Now!{" "}
        <Link to="/Register">
          <span style={{ color: "red" }}> Register</span>
        </Link>
      </h5>
    </div>
  );
}
