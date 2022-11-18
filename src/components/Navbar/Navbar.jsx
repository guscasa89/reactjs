import Proptypes from "prop-types";
import "./Navbar.scss";
import Cartwidget from "../Cartwidget/Cartwidget";

const Navbar = ({ children }) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img id="logo" src="/img/logo2.png" alt="" /></a>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="">Inicio
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Menu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Pedidos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Sobre mi</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Contacto</a>
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
