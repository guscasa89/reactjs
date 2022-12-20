import React from 'react';
import Button from 'react-bootstrap/Button';
import './ButtonEnd.css';
import { Link } from "react-router-dom";

const ButtonEnd = () => {
  
  
  
  
  return (
    <div>
    <Link to={`/cart`}>
      <Button  className="space" variant="warning">Finalizar Compra</Button>
    </Link>
    <Link to={`/inicio`}>
      <Button  className="space" variant="success">Agregar mas productos</Button>
    </Link>
    </div>
  )
}

export default ButtonEnd