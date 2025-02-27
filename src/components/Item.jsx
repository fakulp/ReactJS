import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({item}) =>(

<Card key={item.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.imagen} />
        <Card.Body>
            <Card.Title>{item.titulo}</Card.Title>
            <Card.Text>{item.faccion}</Card.Text>
            <Card.Text>{item.descripcion}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
</Card>
);