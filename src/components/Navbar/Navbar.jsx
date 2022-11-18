import Proptypes from "prop-types";
import "./Navbar.scss";

const Navbar = ({ opciones, children }) => {
  return (
    /*
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img id="logo" src="assets/images/logo2.png" alt=""></a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="index.html">Inicio
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/menu.html">Menu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/pedidos.html">Pedidos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/nosotros.html">Sobre mi</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/contacto.html">Contacto</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-sm-2" type="text" placeholder="Busqueda en la página">
          <button class="btn btn-outline-warning my-2 my-sm-0 " type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
      */

    <div className="navbar">
      <div className="navbar__menus">
        {opciones.map((menu) => {
          return <div className="navbar__menu">{menu}</div>;
        })}
      </div>
      <div>{children}</div>
    </div>
  );
};

Navbar.prototype = {
  opciones: Proptypes.array.isRequired,
  children: Proptypes.element,
};

export default Navbar;
