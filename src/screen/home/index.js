import { useState } from "react";
import React from 'react';
import {
  Collapse,
  Container,
  Jumbotron,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Container>
        <Jumbotron>
          <h1>Home Page</h1>
        </Jumbotron>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">My Home</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">Contact</NavLink>
                </NavItem>
              </Nav>
              <NavbarText>Simple Text</NavbarText>
            </Collapse>
          </Navbar>
        </div>
      </Container>
    </div>
  );
};

export default Home;
