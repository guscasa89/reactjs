import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import ItemDetailContainer from "../ItemDetailContainer";
import { Link } from "react-router-dom";

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
      <Link to={`/item/${item.id}`}>Mas info</Link>
    </Card>
    
  );
};

export default Item;
