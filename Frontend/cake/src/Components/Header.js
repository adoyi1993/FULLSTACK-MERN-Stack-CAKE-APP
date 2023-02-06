import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Components/header.css';
import {Link} from "react-router-dom"

const Header = () => {

  // <Nav.Link >  <Link to="/about"   style={{textDecoration: "none", color: "white", marginLeft: "20px"}} >About Us</Link> </Nav.Link>
  return (
    <div>
         <>
      <Navbar bg="dark" variant="dark" fixed='top'>
        <Container>
          <Navbar.Brand href="#home">  <Link to="/"  style={{textDecoration: "none",  fontSize: "30px", background: "-webkit-linear-gradient(#eee, #333)", webkitBackgroundClip: "text", webkitTextFillColor: "transparent"}} variant="primary"  > CakeHouse </Link> </Navbar.Brand>
          <div className="nav_items">
          <Nav className="me-auto"  >
            <Nav.Link > <Link  className='Navv' to='/cakes' style={{textDecoration: "none", color: "white",  }}>Products</Link> </Nav.Link>
        
            <Nav.Link>  <Link to="/contact"   style={{textDecoration: "none", color: "white", marginLeft: "20px"}}>Contact Us</Link> </Nav.Link>
          </Nav>
          </div>
         
        </Container>
      </Navbar>
     
    </>
    </div>
  )
}

export default Header