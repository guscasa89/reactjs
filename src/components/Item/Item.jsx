import React from "react";
import Card from "react-bootstrap/Card";

const Item = ({ item }) => {
  return (
    <Card>
      <Card.Img variant="top" src={item.url} />
      <Card.Body>
        <Card.Title>{item.titulo}</Card.Title>
        <Card.Text>
         {item.descripcion}
        </Card.Text>
        <Card.Text>
            {item.costo}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Ramallo Cocina</small>
      </Card.Footer>
    </Card>
  );
};

export default Item;
