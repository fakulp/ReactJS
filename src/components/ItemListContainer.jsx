import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import { Container } from "react-bootstrap"
import {items} from "../data/data"
import { ItemList } from "./ItemList";

const {id} = useParams


export const ItemListContainer = () => { 
  
  const[productos, setProductos]= useState([]);
  const[load, setLoad]= useState(true);

  useEffect(()=> {
    new Promise ((resolve,reject) => setTimeout (() => resolve (items),500)).then((anwser) => { 
      if(!id) {setProductos(anwser)
      }else{
        const filtered = anwser.filter ((item) => item.faccion === id );
        setProductos(filtered);
      }
      })
      .finally(()=> setLoad(false));
  },[id]);
  if(load) return "Cargando";

return (
  <Container className="d-flex mt-4">
    <ItemList items= {productos} />
  </Container>
  )
};
