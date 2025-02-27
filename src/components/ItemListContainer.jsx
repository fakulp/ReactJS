import { Container } from "react-bootstrap"
import {items} from "../data/data"
import { ItemList } from "./ItemList";



export const ItemListContainer = () => (
  <Container className="d-flex mt-4">
    <ItemList items= {items} />
  </Container>
);
