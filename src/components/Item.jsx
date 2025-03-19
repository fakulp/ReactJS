import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => (
    
<Card className=" bg-transparent bg-gradient d-flex flex-column border-warning" style={{ width: '18rem', minHeight: '18rem'  }}>
    <Card.Img style={{ width: '100%', height: '200px', objectFit: 'cover' }} className='mt-1 ' variant="top" src={item.imagen} />
        <Card.Body className="d-flex flex-column flex-grow-1">
        <Card.Title className='text-warning'>{item.titulo}</Card.Title>
        <Card.Text className='text-warning'>{item.faccion}</Card.Text>
        <Card.Text  className="flex-grow-1 text-warning">{item.descripcion}</Card.Text>
        <Link to={`/detalles/${item.id}`}>
            <Button  variant="outline-warning">Información</Button>
        </Link>
    </Card.Body>
</Card>
);



