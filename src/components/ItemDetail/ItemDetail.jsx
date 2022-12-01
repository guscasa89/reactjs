import React from "react";


import Card from "react-bootstrap/Card";

const ItemDetail = ({ item }) => {
    
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={item.url} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{item.titulo}</Card.Title>
        <Card.Text>{item.descripcion}</Card.Text>
        <Card.Text>{item.costo}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default ItemDetail;
