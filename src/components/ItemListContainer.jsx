import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../css/app.css';
import { getFirestore, getDocs, collection, query, where, } from "firebase/firestore";
import { Container } from "react-bootstrap"

import { ItemList } from "./ItemList";




export const ItemListContainer = () => { 
  
  const[productos, setProductos]= useState([]);
  const[load, setLoad]= useState(true);
  const {id} = useParams();
  
  const db = getFirestore();


useEffect(()=> {
    const q =  id ? query(collection(db, "items"),where("faccion", "==", id)) 
    : query(collection(db, "items"));

getDocs(q).then((snapshot) => {
if (snapshot.size === 0) console.log("no results");
else
setProductos(
snapshot.docs.map((doc) => {
return { id: doc.id, ...doc.data() };
})
);
}).finally(()=> setLoad(false));
  },[id]);
  if(load) return "Cargando";

return (
  <Container className="fondo row d-flex mt-4 justify-content-center gap-3">
    <ItemList items= {productos} />
  </Container>
  )
};
