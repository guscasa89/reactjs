import React from "react";
import './ItemDetail.scss'
import Card from "react-bootstrap/Card";
import { useState } from 'react';
import ShowData from "../ShowData/ShowData";

const ItemDetail = ({ item }) => {

  //const Boton = inputType === 'agregar' ? ItemCount : ButtonEnd;

  const [option, setOption] = useState(1)


  const onAdd = (count) => {
    alert(`Agregaste ${count} productos`);
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
      <ShowData onAdd={onAdd} type={option}/>
      
    </Card>

  );
};

export default ItemDetail;
