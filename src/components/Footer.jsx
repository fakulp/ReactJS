import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';


export const Footer = () => {
return (
    <div className="wrapper">
    <footer className="footer bg-warning text-dark py-4 mt-5">
    <Container>
        <Row>
        <Col md={4} className="text-center text-md-start">
            <h5>Dungeon Chest</h5>
            <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        </Col>
        
        <Col md={4} className="text-center">
            <ul className="list-unstyled">
            <li><Link to="/" as={NavLink} className="text-dark text-decoration-none">Inicio</Link></li>
            <li><Link to="/faccion/Astartes" as={NavLink} className="text-dark text-decoration-none">Marines Espaciales</Link></li>
            <li><Link to="/faccion/Custodes" as={NavLink} className="text-dark text-decoration-none">Custodes</Link></li>
            <li><Link to="/faccion/Cart" as={NavLink} className="text-dark text-decoration-none">Mis Compras</Link></li>

            </ul>
        </Col>

        <Col md={4} className="text-center text-md-end">
            <h5>Síguenos</h5>
            <a href="https://facebook.com" className="text-dark me-3">Facebook</a>
            <a href="https://twitter.com" className="text-dark me-3">Twitter</a>
            <a href="https://instagram.com" className="text-dark">Instagram</a>
        </Col>
        </Row>
    </Container>
    </footer>
    </div>
);
}

