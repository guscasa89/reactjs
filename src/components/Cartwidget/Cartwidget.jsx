import "./Cartwidget.scss";
import { useContext } from "react";
import { CartContext } from '../../Context/CartContext';

const Cartwidget = () =>{

    const {qty} = useContext(CartContext) 


    return(
        <div className="container">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="badge">{qty}</span>
        </div>
    )
}


export default Cartwidget;