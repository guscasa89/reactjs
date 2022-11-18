import Proptypes from "prop-types";
import "./Navbar.scss";
import Cartwidget from "../Cartwidget/Cartwidget";

const Navbar = ({ children }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img id="logo" src="/img/logo2.png" alt="" /></a>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" href="">Inicio
              <span className="visually-hidden">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Menu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Pedidos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Sobre mi</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Contacto</a>
          </li>
        </ul>
        
        <Cartwidget />
        
      </div>
    </div>
  </nav>
  );
};

Navbar.prototype = {
  opciones: Proptypes.array.isRequired,
  children: Proptypes.element,
};

export default Navbar;
