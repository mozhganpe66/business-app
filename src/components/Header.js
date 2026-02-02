import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../pictures/Logo.png';
import './Header.css';


     
export default function Header() {
    
  return (
    <Navbar expand="lg" className="header mb-4">
      <Container>
        <Navbar.Brand href="/"><img className="logo-image" src={logo} img-fluid /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">HomePage</Nav.Link>
            <Nav.Link href="/Registration">Registration</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Ad">Post a Task</Nav.Link>
            <Nav.Link href="/UserProfile">UserProfile</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

