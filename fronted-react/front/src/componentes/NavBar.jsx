import React from 'react'
import {Link} from "react-router-dom"
import { Container,Nav,Navbar,NavDropdown  } from 'react-bootstrap'
const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to= "/" className="nav-link">
            Home
            </Link>
        <Link to= "/Users" className="nav-link">
            Usuarios
            </Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item ><Link to= "/contacto" className="basic-navbar-nav">
              Contacto
              </Link></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item >Salir</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        // <div className = "d-grid gap-2 d-md-flex mb-2">
        //    <Link to= "/inicio" className="btn btn-dark">
        //      Inicio
        //    </Link>
        //    <Link to= "/contacto" className="btn btn-dark">
        //      Contacto
        //    </Link> 
        //    <Link to= "/cliente" className="btn btn-dark">
        //      Cliente
        //    </Link>
        // </div>
    )
}

export default NavBar

           