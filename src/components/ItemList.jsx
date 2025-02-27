import { Item } from "./Item";



export const ItemList = ({items}) => 
items.map((item) => <Item item={item}/>)
;