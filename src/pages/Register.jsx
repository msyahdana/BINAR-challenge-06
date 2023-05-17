import React, { useState } from "react";
import NavbarWithoutSearch from "../components/Header/NavbarWithoutSearch";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/actions/authActions";
import GoogleRegister from "../components/Auth/GoogleRegister";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        name,
        email,
        password,
      });

      dispatch(register(data, navigate));
    } catch (error) {}
  };

  return (
    <>
      <div className="vh-100">
        <NavbarWithoutSearch />
        <Container className="p-5 mt-5">
          <h1 className="text-center text-white mb-4 mt-4">Register Your Account</h1>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-light">Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-light">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-light">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Row>
              <Col className="text-center pt-1">
                <Button className="w-25" variant="danger" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <h3 className="text-light py-2">Or</h3>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <GoogleRegister />
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default Register;
