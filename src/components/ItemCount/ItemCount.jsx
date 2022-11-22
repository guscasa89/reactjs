import React from 'react'
import './ItemCount.scss'
import { useState } from 'react';

const ItemCount = () => {
    const [count, setCount] = useState(0);


  return (
    <div className="input-group">
    <span className="input-group-btn">
        <button onClick={() => { count!=0 ? setCount(count -1) : setCount(0) }}  className="btn btnRed btn-minuse" type="button">-</button>
    </span>
    <input type="text" className="form-control no-padding add-color text-center height-25" maxlength="3" value={count}/>
    <span className="input-group-btn">
        <button onClick={() => setCount(count + 1)} className="btn btnGreen btn-pluss" type="button">+</button>
    </span>
    </div>
  )
}

export default ItemCount