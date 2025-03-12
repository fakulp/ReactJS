import { useState } from "react";
import Button from 'react-bootstrap/Button';





export const ItemCounter = ({stock, add}) => {
const[contador,setContador] = useState(1);


const handleAdd = () => {
    if(stock > contador) setContador ((prev) => prev +1)

}


const handleRemove = () => {
    if(contador > 1 ) setContador ((prev) => prev -1)
}

const handleCart = () => {
    setContador(1);
    add(contador);
}


return(
    <section>
<div className="d-flex justify-content-center gap-3 mb-2">
    <Button onClick={handleRemove} variant="warning">-</Button>
    <Button variant="secondary" disabled >{contador}</Button>
    <Button onClick={handleAdd} variant="warning">+</Button>
    <Button onClick={handleCart} variant="warning">¡Agregar!</Button>
</div>

    </section>
)};