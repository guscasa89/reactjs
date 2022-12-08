import Proptypes from "prop-types";
import "./Navbar.scss";
import Cartwidget from "../Cartwidget/Cartwidget";


const Navbar = ({ opciones }) => {

  

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
                    return <li key={id} className="nav-item"><a className="nav-link" href={item.href}>{item.menu}</a></li>
                                      
                  })
          }
          
          
        </ul>
        
        
        <Cartwidget />
        
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
