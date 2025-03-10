import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({item}) =>(
<>
<Card  style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.imagen} />
        <Card.Body>
            <Card.Title>{item.titulo}</Card.Title>
            <Card.Text>{item.faccion}</Card.Text>
            <Card.Text>{item.descripcion}</Card.Text>
        <Link to={`/detalles/${item.id}`}>
        <Button variant="primary">Informacion</Button>
        </Link>
        </Card.Body>
</Card>
</>
);