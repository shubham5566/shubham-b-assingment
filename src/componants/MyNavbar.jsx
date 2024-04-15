import React from 'react'
import Brand from "../assets/logo.svg"
import {Navbar, Container, Nav} from "react-bootstrap"
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import MyButton from './MyButton';
function MyNavbar() {
  return (
    <Navbar bg="light" data-bs-theme="light"  sticky="top" >
      <Container>
        <Navbar.Brand>
        <Link to="/">
          <img src={Brand}  />
        </Link>
        </Navbar.Brand>
        <Nav >
            <Nav.Link>
          <Link to="/cityLands">
              City Lands
          </Link>
              </Nav.Link>
            <Nav.Link>
          <Link to="/all-lands">
              All Lands
          </Link>
              </Nav.Link>
            <Nav.Link>
          <Link to="/services">
               Services
          </Link>
               </Nav.Link>
            <Nav.Link>
          <Link to="/testimonials">
               Testimonials
          </Link>
               </Nav.Link>
            <Nav.Link> 
          <Link to="/premium">
              Premium
          </Link>
              </Nav.Link>
        </Nav>
        <div> 

        <MyButton>{ "Sell my Land"}</MyButton>{" "}
        <MyButton>{"Account"}{" "}<FaArrowRight /> </MyButton>{" "}
        </div>
        
      </Container>
    </Navbar>
  );
}

export default MyNavbar