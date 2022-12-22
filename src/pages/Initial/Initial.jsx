import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar';
import ItemListContainer from '../../components/ItemListContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contacto from '../../components/Contacto'
import ItemDetailContainer from '../../components/ItemDetailContainer';
import CartFinish from '../../components/CartFinish';


const Initial  = () => {
    const Opciones = [
        {menu: 'Inicio', href: '/inicio'}, 
        {menu: 'Congelados', href: '/category/1'}, 
        {menu: 'Ensaladas', href: '/category/2'}, 
        {menu: 'Sopas', href: '/category/3'}, 
        {menu: 'Jugos', href: '/category/4'}, 
        {menu: 'Contacto', href: '/contacto'}
    ]

    return(
        <BrowserRouter >
        <Layout>
            <Navbar opciones={Opciones}/>
        </Layout>
        <Routes>
            <Route exact path='/' element={<ItemListContainer />}/>
            <Route exact path='/inicio' element={<ItemListContainer />}/>
            <Route exact path='/category/:categoryid' element={<ItemListContainer />}/>
            <Route exact path='/contacto' element={<Contacto />}/>
            <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
            <Route exact path='/cart' element={<CartFinish />}/>
        </Routes>
        </BrowserRouter>
    )
      
    
    
}

export default Initial;