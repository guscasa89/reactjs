import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar';
import List from '../../components/List'

const Initial  = () => {
    //const opciones = ['Inicio','Congelados','Tartas','Ensaladas','Contacto']
    const Items = ["item item1", "item item2", "item item3", "item item4"]
    return(
        <Layout>
            <Navbar />
            <List listas={Items}/>
        </Layout>
    )
}

export default Initial;