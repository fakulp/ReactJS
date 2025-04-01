import React from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Card, Button, } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';





const valoresIniciales ={
  nombre:"",
  email:"",
}



export const SideCard = () => {

  const [comprador, setComprador] = useState(valoresIniciales)

const { onRemove, productos } = useContext(CartContext);

const total = () => productos.reduce (
  (acumulado, actual) => acumulado + actual.contador * actual.precio,0 );



const handleOrder = () => {
const order = {
  comprador: comprador,
  items: productos,
  total: total(),
};
console.log(order)



const db = getFirestore();
const orderCollection = collection(db, "orders");

addDoc(orderCollection, order).then(({ id }) => {
  if (id) {
    alert("Su orden: ¡Ha sido completada!");
  }
}).finally(() => {
  setComprador(valoresIniciales);
  onRemove();

});
};

const handleChange = (event) =>{
  setComprador ({...comprador, [event.target.name]: event.target.value})
}


  return (
    <div className="d-flex  p-3">
      <Card style={{ width: "28rem" }} className="shadow-lg p-4 bg-dark text-white">
        <Card.Body>
          <Card.Title className="fw-bold fs-4">Resumen de Compra</Card.Title>
          <hr />


          <div className="row justify-content-between">
          {productos.length > 0 ? (
            productos.map((producto) => (
              <div key={producto.id} className="mb-3 p-2 ">
                <p>Producto: {producto.titulo}</p>
                <p>Cantidad: {producto.contador}</p>
                <p className="fw-bold">Subtotal: ${producto.contador * producto.precio}</p>
              </div>
            ))
          ) : (
            <p className="text-center">No hay productos en el carrito.</p>
          )}
          </div>


          <hr />
          <div className="d-flex justify-content-between fw-bold fs-5">
            <span>Total</span>
            <span>$ ${total()}</span>
          </div>


          <div>
          <InputGroup className="mb-3">
  <InputGroup.Text>Nombre</InputGroup.Text>
  <Form.Control 
    type="text" 
    name="nombre" 
    value={comprador.nombre} 
    onChange={handleChange} 
    id="inputGroup-sizing-default"
    aria-label="Nombre"
  />
</InputGroup>

<InputGroup className="mb-3">
  <InputGroup.Text>Email</InputGroup.Text>
  <Form.Control 
    type="email" 
    name="email" 
    value={comprador.email} 
    onChange={handleChange} 
    id="inputGroup-sizing-default"
    aria-label="Email"
  />
</InputGroup>
        </div>

          <div>
          <Button  onClick={handleOrder} variant="warning" className="w-100 mt-3">
            Comprar
          </Button>
          <Button onClick={onRemove} variant="warning" className="w-100 mt-3">
            Vaciar
          </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};