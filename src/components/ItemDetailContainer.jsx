import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import {items} from "../data/data";
import Card from 'react-bootstrap/Card';
import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../contexts/CartContext";


export const ItemDetailContainer = () => { 
const[producto, setProducto]= useState([]);
const[load, setLoad]= useState(true);
const {id} = useParams();
const {onAdd} = useContext(CartContext)


useEffect(()=> {
    new Promise ((resolve,reject) => setTimeout (() => resolve (items),500)).then((anwser) => { 
        const finded = anwser.find ((item) => item.id === Number(id) );
        setProducto(finded);
    })
    .finally(()=> setLoad(false));
},[id]);

const add = (contador) => {
    onAdd({...producto, contador});
}

if(load) return "Cargando";

return (
<Container className="d-flex mt-4 justify-content-center">
<Card className="  bg-gradient bg-transparent border-warning" style={{ width: '18rem' }}>
    <Card.Img className="mt-2" variant="top" src={producto.imagen} />
        <Card.Body className="">
            <Card.Title className='text-warning'>{producto.titulo}</Card.Title>
            <Card.Text className='text-warning'>{producto.faccion}</Card.Text>
            <Card.Text className='text-warning'>{producto.descripcion}</Card.Text>
            <Card.Text className='text-warning'>{producto.precio}</Card.Text>
        </Card.Body>
        <ItemCounter stock={producto.stock} add={add}/>
</Card>
</Container>
)
};
