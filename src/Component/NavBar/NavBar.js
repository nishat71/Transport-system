import React, { useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [navbar, setNavbar] = useState(false)
  return (

    <div className='sticky-top py-2 nav-area'>
      <div className='nav-container'>
        <Navbar bg="dark" expand="lg" variant='dark'>
          <Container fluid>
        <Navbar.Brand href="/" className='text-danger fs-2 fw-bolder mx-5'>Bus<span className='text-light'>TransPort</span></Navbar.Brand>
          {/* <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://img.freepik.com/premium-vector/simple-buss-traansportation-logo-design_569344-386.jpg?w=2000"
              width="5px"
              height="5px"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand> */}

        <Navbar.Toggle aria-controls="navbarScroll" className='text-dark' />
        <Navbar.Collapse id="navbarScroll" className=' d-lg-flex justify-content-between'>
          <Nav
            className="me-auto mx-auto my-2 my-lg-0 align-items-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/" className=' fw-bold  fs-5 nav-font mx-1 hover'>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/cars" className=' fw-bold fs-5 nav-font mx-1'>Buses</Nav.Link>
            {/* <Nav.Link as={NavLink} to="/cars" className=' fw-bold fs-5 nav-font mx-1'>Students</Nav.Link> */}
            <NavDropdown title="Students" id="basic-nav-dropdown">
              <NavDropdown.Item>CSE</NavDropdown.Item>
              <NavDropdown.Item>EEE
              </NavDropdown.Item>
              <NavDropdown.Item>Civil</NavDropdown.Item>
              <NavDropdown.Item>
              Architecture
              </NavDropdown.Item>
              <NavDropdown.Item >
              BBA
              </NavDropdown.Item>
              <NavDropdown.Item>
              English
              </NavDropdown.Item>
              <NavDropdown.Item>
              Law
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/routes" className=' fw-bold  fs-5 nav-font  mx-1'>Routes</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className=' fw-bold  fs-5  nav-font  mx-1'>Contact Us</Nav.Link>
            <Nav.Link as={NavLink} to="/request" className=' fw-bold  fs-5  nav-font  mx-1'>Request</Nav.Link>

          </Nav>
          <div className='d-flex  align-items-center main-btn'>
            {user && <h6 className='text-danger fw-semi-bold text-light me-3 p-0 name d-lg-block d-md-none d-none'>{user?.displayName}</h6>}
            {user?.email && <Link to={"/admin"}><button className='btn-danger px-4 py-2 mx-2 outline-0 fw-bold '>Dashboard</button></Link>}
            {user?.email ? <button onClick={logOut} className='btn-danger px-4 py-2 rounded logout fw-bold'><Link to={"/"} className="text-decoration-none text-light ">Logout</Link></button>
              : <button className='btn-danger px-4 py-2 rounded fw-bold'> <Link to={"/login"} className="text-decoration-none  text-light ">Login</Link></button>}
          </div>
        </Navbar.Collapse>
      </Container>
        </Navbar>
      </div>
    </div>
  );
};


export default NavBar;
