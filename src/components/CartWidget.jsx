import { useContext } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { SideCard } from "./SideCard";

export const CartWidget = () => {
    const { productos, onRemove } = useContext(CartContext);

    return (

<>


<Container className="mt-4">
    <Row className="justify-content-end align-items-start">
        <Col xs="12" md="4" className="mb-4">
        <SideCard/>
        </Col>
        <Col xs="12" md="8">
            <Row className="justify-content-start">
                {productos.map((producto) => (
                    <Col key={producto.id} xs="12" sm="6" md="4" className="mb-4">
                        <Card
                            className="bg-gradient bg-transparent border-warning"
                            style={{ width: "18rem" }}>
                            <Card.Img
                                className="mt-2"
                                variant="top"
                                src={producto.imagen}/>
                            <Card.Body>
                                <Card.Title className="text-warning">
                                    {producto.titulo}
                                </Card.Title>
                                <Card.Text className="text-warning">
                                    Cantidad: {producto.contador}
                                </Card.Text>
                                <Card.Text className="text-warning"> $
                                    {producto.precio}
                                </Card.Text>
                                <Card.Text className="text-warning">Total: $X</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
    </Row>
</Container>

</>
    );
};
