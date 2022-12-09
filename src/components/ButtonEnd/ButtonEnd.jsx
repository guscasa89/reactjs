import React from 'react';
import Button from 'react-bootstrap/Button';
import './ButtonEnd.css';
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';

const ButtonEnd = () => {

  const {darNombre} = useContext(CartContext)
  const [nombre,setNombre] = useState('Hugo')

  const handleDarNombre= () => {
      if(nombre == 'Hugo'){
        setNombre('Paco')
        darNombre('Paco')
      }
      else{
        setNombre('Hugo')
        darNombre('Hugo')
      }
  }

  return (
    <Link to={`/cart`}>
      <Button onClick={() => handleDarNombre()}  variant="success">Finalizar Compra</Button>
    </Link>
  )
}

export default ButtonEnd