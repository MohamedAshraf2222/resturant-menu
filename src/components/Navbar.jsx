import { Button } from "bootstrap";
import React, { useState } from "react";
import { Container, Form, Nav, Navbar, Row } from "react-bootstrap";

const NavbarCo = ({ filterBySearch }) => {
  
  const [value, setValue] = useState('')
  const onSearch = () => {
    filterBySearch(value)
  };
  return (
    <>
      {/* <Row>asdfadfaf</Row> */}
      <Row>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand className="nav-font" href="#">
              منيو مطعم
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="ابحث..."
                  className="mx-2"
                  onChange={(e)=>setValue(e.target.value)}
                />
                <div
                  onClick={() => onSearch()}
                  className="btn"
                >
                  بحث
                </div>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
    </>
  );
};

export default NavbarCo;
