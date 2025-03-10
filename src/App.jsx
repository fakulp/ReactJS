import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ItemListContainer} from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";




function App() {


  return (

    <BrowserRouter>
    <NavBar/>
    <Routes>

    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/faccion/:id" element={<ItemListContainer/>} />
    <Route path="/detalles/:id" element={<ItemDetailContainer/>} />
    <Route path="*" element="404" />
    </Routes>
    </BrowserRouter>

  )
};

export default App;
