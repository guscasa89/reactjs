import React from 'react';
import Button from 'react-bootstrap/Button';
import './ButtonEnd.css';
import { Link } from "react-router-dom";

const ButtonEnd = () => {
  
  
  
  
  return (
    
    <Link to={`/cart`}>
      <Button variant="success">Finalizar Compra</Button>
    </Link>
  )
}

export default ButtonEnd