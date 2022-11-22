import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar';
import List from '../../components/ItemListContainer'


const Initial  = () => {
    const Items = ["item item1", "item item2", "item item3", "item item4"]
    return(
        <Layout>
            <Navbar />
            <List listas={Items}/>
        </Layout>
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