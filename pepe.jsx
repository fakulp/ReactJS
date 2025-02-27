// import { useEffect, useState} from "react";
// import { useParams } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import {items} from "../data/data";
// import {ItemList} from "./ItemList";
// const {id} = useParams();


// export const ListContainer = (props) =>{
//   const[productos, setProductos]= useState([]);
//   const[load, setLoad]= useState(true);


//   useEffect(()=>{
//     new Promise((resolve,reject)=>setTimeout ( () =>resolve (items), 5000 ) )
//     .then((anwser)=> {  if(!id) { setProductos(anwser) } else { 
//       const filtred = anwser.filtrered((item) => item.faccion === Number(id))
//       setProductos(filtred);
//     }  }).finally(() => setLoad(false))
//   },[])
//   if(load) return "Cargando :D"

//     return(
//       <Container className="d-flex mt-4">
//       <ItemList items={productos}/>
//       </Container>
//     )
// }
