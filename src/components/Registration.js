import React from "react";
import { Form, Button } from "react-bootstrap";
import useForm from "./UseForm";
import validation from "./validation";
import { Link } from "react-router-dom";

function Registration() {
  let { handleChange, values, seterror, errors } = useForm();

  const _handleSubmit = async (e) => {
    e.preventDefault();
    let error = validation(values);
    if (Object.keys(error).length) {
      seterror(error);
      return;
    }
    const { username, email, number, password, cpassword } = values;
    try {
      const res = await fetch("registration", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ username, email, number, password, cpassword }),
      });
      const data = await res.json();
      alert(data.message);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container register_container">
      <h1>Registration</h1>
      <Form method="POST" onSubmit={_handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Enter UserName</Form.Label>
          <Form.Control
            type="name"
            name="username"
            value={values.username}
            onChange={handleChange}
            placeholder="Enter username"
          />
        </Form.Group>
        {errors.username && <p style ={{ color :'red'}}>{errors.username}</p>}
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={values.email}
            placeholder="Enter email"
            value={values.email}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.email && <p style ={{ color :'red'}}>{errors.email}</p>}
        <Form.Group className="mb-3" name="number" controlId="formGroupEmail">
          <Form.Label>Enter Mobile Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter mobile number"
            name="number"
            value={values.number}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.number && <p style ={{ color :'red'}}>{errors.number}</p>}
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Enter password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p style ={{ color :'red'}}>{errors.password}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label> Enter confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="cpassword" 
            placeholder="Password"
            value={values.password2}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.cpassword && <p style ={{ color :'red'}}>{errors.cpassword}</p>}
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label></Form.Label>
          <Form.Control
            type="submit"
            value="Submit"
            className="btn btn-primary"
          />
        </Form.Group>
      </Form>

      <h5>
        {" "}
        Already have account{" "}
        <Link to="/Login">
          <span style={{ color: "red" }}> Login</span>
        </Link>
      </h5>
    </div>
  );
}

export default Registration;
