import React from "react";
import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";





export const SideCard = () => {

const { onRemove } = useContext(CartContext);



  return (
    <div className="d-flex  p-3">
      <Card style={{ width: "28rem" }} className="shadow-lg p-4 bg-dark text-white">
        <Card.Body>
          <Card.Title className="fw-bold fs-4">Resumen de Compra</Card.Title>
          <hr />
          <div className="d-flex justify-content-between">
            <span>Envíos ()</span>
            <span>$ </span>
          </div>
          <hr />
          <div className="d-flex justify-content-between fw-bold fs-5">
            <span>Total</span>
            <span>$ X</span>
          </div>
          <Button onClick={handleOrder} variant="warning" className="w-100 mt-3">
            Comprar
          </Button>
        <Button onClick={onRemove} variant="warning" className="w-100 mt-3">
            Vaciar
        </Button>
        </Card.Body>
      </Card>
    </div>
  );
};