import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => (
<Card className=" d-flex flex-column" style={{ width: '18rem', minHeight: '18rem' }}>
    <Card.Img variant="top" src={item.imagen} />
        <Card.Body className="d-flex flex-column flex-grow-1">
        <Card.Title>{item.titulo}</Card.Title>
        <Card.Text>{item.faccion}</Card.Text>
        <Card.Text  className="flex-grow-1">{item.descripcion}</Card.Text>
        <Link to={`/detalles/${item.id}`}>
            <Button style={{}} variant="primary">Información</Button>
        </Link>
    </Card.Body>
</Card>
);



