import React from "react";
import './ItemDetail.scss'


import Card from "react-bootstrap/Card";

const ItemDetail = ({ item }) => {

  return (

    <Card className="bg-dark text-white">
      <Card.Body>
        <Card.Title>{item.titulo}</Card.Title>
        <Card.Text>{item.descripcion}</Card.Text>
        <Card.Text>{item.costo}</Card.Text>
      </Card.Body>
      <Card.Img className="resize" variant="top" src={item.url} />
    </Card>

  );
};

export default ItemDetail;
