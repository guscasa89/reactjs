import Proptypes from "prop-types";
import "./Navbar.scss";
import Cartwidget from "../Cartwidget/Cartwidget";
import { Link } from "react-router-dom";
import { CartContext } from '../../Context/CartContext';
import { useContext } from "react";


const Navbar = ({ opciones }) => {

  const { cartList} = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><img id="logo" src="/img/logo2.png" alt="" /></a>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          
          {
                  opciones.map((item, id) =>
                  {
                    //puedo generar mis propias llaves, por ejemplo let key = item+"-"+id
                    return <li key={id} className="nav-item"><Link to={item.href}>{item.menu}</Link></li>
                    
                    
                  })
          }
          
          
        </ul>
        
        {cartList.length > 0 && <Cartwidget /> }
        
        
      </div>
    </div>
  </nav>
  );
};

Navbar.prototype = {
  //opciones: Proptypes.array.isRequired,
  children: Proptypes.element,
};

export default Navbar;
