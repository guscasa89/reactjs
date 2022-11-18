import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar';
import Cartwidget from '../../components/Cartwidget';
import List from '../../components/List'

const Initial  = () => {
    const opciones = ['Inicio','Congelados','Tartas','Ensaladas','Contacto']
    const Ensaladas = ['Quinoa','Rucula','Caprese']
    return(
        <Layout>
            <Navbar opciones={opciones}><Cartwidget /></Navbar>
            <List listas={Ensaladas}/>
        </Layout>
    )
}

export default Initial;