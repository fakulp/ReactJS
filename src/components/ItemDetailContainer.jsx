import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import {items} from "../data/data";
import Card from 'react-bootstrap/Card';




export const ItemDetailContainer = () => { 

const[producto, setProducto]= useState([]);
const[load, setLoad]= useState(true);
const {id} = useParams();

useEffect(()=> {
    new Promise ((resolve,reject) => setTimeout (() => resolve (items),500)).then((anwser) => { 
        const finded = anwser.find ((item) => item.id === Number(id) );
        setProducto(finded);
    })
    .finally(()=> setLoad(false));
},[id]);
if(load) return "Cargando";

return (
<Container className="d-flex mt-4 justify-content-center">
<Card  style={{ width: '18rem' }}>
    <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
            <Card.Title>{producto.titulo}</Card.Title>
            <Card.Text>{producto.faccion}</Card.Text>
            <Card.Text>{producto.descripcion}</Card.Text>
        </Card.Body>
</Card>
</Container>
)
};
