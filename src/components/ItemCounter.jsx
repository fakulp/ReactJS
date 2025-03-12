import { useState } from "react";
import Button from 'react-bootstrap/Button';





export const ItemCounter = () => {
const[contador,setCountador] = useState(1);
const handleAdd = () => setCountador ((prev) => prev +1)
const handleRemove = () => setCountador ((prev) => prev -1)

return(
    <section>
<div className="d-flex justify-content-center gap-3 mb-2">
    <Button onClick={handleRemove} variant="warning">-</Button>
    <Button variant="secondary" disabled >{contador}</Button>
    <Button onClick={handleAdd} variant="warning">+</Button>
    <Button variant="warning">¡Agregar!</Button>
</div>

    </section>
)};