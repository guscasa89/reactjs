import React from 'react';
import Table from 'react-bootstrap/Table';
import { useContext } from "react";
import { CartContext } from '../../Context/CartContext';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from "react-router-dom";
import ButtonEnd from '../ButtonEnd/ButtonEnd';

const CartFinish = () => {

  const { count, cartList, removeItem, clear} = useContext(CartContext);

  let costoTotal = 0;

  const addMonto = (num) => {
    costoTotal = costoTotal + num;
  };
 

  const onRemove = (id) => {
    
    removeItem(id);
    //console.log(context)

  }; 

  const onClear = () => {
    
    clear();
    //console.log(context)

  }; 

  return (
    <><Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Articulo</th>
          <th>Precio por Unidad</th>
          <th>Cantidad</th>
          <th>Precio Total</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {cartList.map((item) => {
          //puedo generar mis propias llaves, por ejemplo let key = item+"-"+id
          const costoNum = Number(item.costo.replace("$", ""));
          let total = item.cantidad*costoNum;
          addMonto(total);
          return <tr><td>{item.titulo}</td><td>{item.costo}</td><td>{item.cantidad}</td><td> ${total}</td>
            <td><Button onClick={() => { onRemove(item.id); } } variant="warning">Eliminar item</Button></td></tr>;

        })}
         {cartList.length > 0 && <tr><td colSpan={3}>COSTO TOTAL: </td><td colSpan={2}>$ {costoTotal}</td></tr> }
         {cartList.length === 0 && <tr><td colSpan={3}>No hay productos en tu carrito</td><td colSpan={2}><Link to={`/inicio`}><Button variant="success">Agregar productos</Button></Link></td></tr> }
                
        
      </tbody>
    </Table>
    <Button disabled={count === 0} onClick={() => { onClear(); } } variant="danger">Vaciar carrito</Button>
    
    </>

  )
}

export default CartFinish