import React from "react";
import './ItemDetail.scss'
import Card from "react-bootstrap/Card";
import { useState } from 'react';
import ShowData from "../ShowData/ShowData";
import { useContext } from "react";
import {  CartContext } from "../../Context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ item }) => {

  //const Boton = inputType === 'agregar' ? ItemCount : ButtonEnd;

  const [option, setOption] = useState(1)
  const {cartList, addToCart} =  useContext(CartContext);


  const toastyAdd = (count) => {

    toast.success(`Agregaste ${count} unidades`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const onAdd = (count) => {
    toastyAdd(count)
    addToCart(item,count)
    //console.log(context)
    console.log("carrito: " + cartList);
    setOption(2)

  };  

  

  return (
    
    <Card className="bg-dark text-white">
      <Card.Body>
        <Card.Title>{item.titulo}</Card.Title>
        <Card.Text>{item.descripcion}</Card.Text>
        <Card.Text>{item.costo}</Card.Text>
      </Card.Body>
      <Card.Img className="resize" variant="top" src={item.url} />
      <ShowData onAdd={onAdd} cart={cartList} type={option}/>
      <ToastContainer />
    </Card>

  );
};

export default ItemDetail;
