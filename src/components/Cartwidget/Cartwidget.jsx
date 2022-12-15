import "./Cartwidget.scss";
import { useContext } from "react";
import { CartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";

const Cartwidget = () =>{

    const {count} = useContext(CartContext) 


    return(
        <div className="container">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="badge">{count}</span>
            <Link to={'/cart'}>Finalizar compra</Link>
            
        </div>
    )
}


export default Cartwidget;