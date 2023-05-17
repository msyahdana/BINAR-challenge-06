import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import NavbarWithoutSearch from "../components/Header/NavbarWithoutSearch";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
import GoogleLogin from "../components/Auth/GoogleLogin";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      email,
      password,
    });

    dispatch(login(data, navigate));
  };
  return (
    <>
      <div className="vh-100">
        <NavbarWithoutSearch />

        <Container className="p-5 mt-5">
          <h1 className="text-center text-white mb-4 mt-4">Login Into Your Account</h1>
          <Form onSubmit={onSubmit}>
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
                <GoogleLogin />
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default Login;
