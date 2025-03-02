import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ItemListContainer} from "./components/ItemListContainer"




function App() {


  return (

    <BrowserRouter>
    <NavBar/>
    <Routes>

    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/faccion/:id" element={<ItemListContainer/>} />
    <Route path="*" element="404" />


    </Routes>
    </BrowserRouter>

  )
}

export default App
