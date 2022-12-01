import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar';
import ItemListContainer from '../../components/ItemListContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../../components/Home'
import ItemDetailContainer from '../../components/ItemDetailContainer';


const Initial  = () => {
    const Items = ["item item1", "item item2", "item item3", "item item4"]
    const Opciones = [
        {menu: 'Inicio', href: '/inicio'}, 
        {menu: 'Congelados', href: '/congelados'}, 
        {menu: 'Tartas', href: '/tartas'}, 
        {menu: 'Sopas', href: '/sopas'}, 
        {menu: 'Jugos', href: '/jugos'}, 
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
            <Route exact path='/congelados' element={<ItemListContainer />}/>
            <Route exact path='/tartas' element={<ItemListContainer />}/>
            <Route exact path='/sopas' element={<ItemListContainer />}/>
            <Route exact path='/jugos' element={<ItemListContainer />}/>
            <Route exact path='/contacto' element={<Home />}/>
            <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
        </Routes>
        </BrowserRouter>
    )
    /*
    const[name, setName] = useState('ReactClass');

    return(
        <div >
            <button onClick={() => setName('ReactFucntion')}></button>
            <h1>Hola {name}</h1>
        </div>
    )
    */
    //const opciones = ['Inicio','Congelados','Tartas','Ensaladas','Contacto']
    
    
    
}

export default Initial;