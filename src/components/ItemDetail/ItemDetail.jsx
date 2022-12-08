import React from "react";
import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount';
import Card from "react-bootstrap/Card";
import ButtonEnd from "../ButtonEnd/ButtonEnd";

const ItemDetail = ({ item , inputType = 'finalizar'}) => {

  //const Boton = inputType === 'agregar' ? ItemCount : ButtonEnd;

  const onAdd = (count) => {
    alert(`Agregaste ${count} productos`);
  };  

  return (

    <Card className="bg-dark text-white">
      <Card.Body>
        <Card.Title>{item.titulo}</Card.Title>
        <Card.Text>{item.descripcion}</Card.Text>
        <Card.Text>{item.costo}</Card.Text>
      </Card.Body>
      <Card.Img className="resize" variant="top" src={item.url} />
      <ItemCount onAdd={onAdd} />
      <ButtonEnd />
    </Card>

  );
};

export default ItemDetail;
