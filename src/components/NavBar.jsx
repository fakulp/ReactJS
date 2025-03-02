
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
<>
    <Navbar expand="lg" className="bg-warning">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>Inicio</Nav.Link>
            <Nav.Link to="/faccion/Custodes" as={NavLink}>Custodes</Nav.Link>
            <Nav.Link to="/faccion/Astartes" as={NavLink}>Marines Espaciales</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
</>
    );
};

