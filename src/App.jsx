import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ItemListContainer} from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Provider } from './contexts/CartContext';
import { Footer } from './components/Footer';
import { CartWidget } from './components/CartWidget';




function App() {

  return (
    <Provider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/faccion/:id" element={<ItemListContainer/>} />
    <Route path="/detalles/:id" element={<ItemDetailContainer/>} />
    <Route path='/cart' element={<CartWidget/>}/>
    <Route path="*" element="404" />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </Provider>
  )
};

export default App;
