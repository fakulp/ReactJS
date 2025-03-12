import { createContext, useState } from "react";

export const CartContext = createContext();


export const Provider = ({children}) => {

    const [product, setProducts] = useState([]);
    

    return <CartContext.Provider value={product}>
    {children}
    </CartContext.Provider>
}