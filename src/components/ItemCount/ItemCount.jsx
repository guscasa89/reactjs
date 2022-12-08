import React from 'react'
import './ItemCount.scss'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({onAdd}) => {
    const [count, setCount] = useState(0);

    

    const addProduct = (num) => {
      setCount(count + num);
    };

  return (
    <div className="count-container">
    <div className="count-container__contador">
      <button
        className="count-container__button" onClick={() => addProduct(-1)} disabled={count === 0} type="button">-</button>
    <span className="count-container__qty">{count}</span>
    <button className="count-container__button" onClick={() => addProduct(+1)} type="button">+</button>
    </div>

    <Button onClick={() => {
          onAdd(count);
        }} variant="outline-warning" disabled={count === 0 ? true : null}>Agregar al carrito</Button>{' '}
    </div>
  )
}

export default ItemCount