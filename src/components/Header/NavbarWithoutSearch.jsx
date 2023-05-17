import React, { useEffect } from "react";
import { Container, Button, Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../style/Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { getMe, logout } from "../../redux/actions/authActions";

function NavbarWithoutSearch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe(null, null, null));
  }, [dispatch]);

  return (
    <Navbar expand="lg" className="transparant fixed-top p-2">
      <Container fluid>
        <Navbar.Brand className="text-danger fs-1 Navbar-logo " as={Link} to={"/"}>
          Movielist
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-danger text-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex justify-content-end">
            <div className="ml-auto">
              <div>
                {isLoggedIn ? (
                  <>
                    <Button variant="outline-danger" className="Navbar-button-lg" as={Link} to={"/users/dashboard"}>
                      Dashboard
                    </Button>
                    <Button
                      variant="danger"
                      className="Navbar-button"
                      onClick={() => {
                        dispatch(logout(navigate));
                      }}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline-danger" className="Navbar-button" as={Link} to={"/login"}>
                      Login
                    </Button>
                    <Button variant="danger" className="Navbar-button" as={Link} to={"/register"}>
                      Register
                    </Button>
                  </>
                )}
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarWithoutSearch;
