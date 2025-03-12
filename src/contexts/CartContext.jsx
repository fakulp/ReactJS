import { createContext, useState } from "react";

export const CartContext = createContext();


export const Provider = ({children}) => {

    const [productos, setProductos] = useState([]);
    
    const onAdd= (producto) => {
        setProductos([...productos, producto])
    };
    console.log (productos);

    return <CartContext.Provider value={{productos , onAdd}}>
    {children}
    </CartContext.Provider>
}