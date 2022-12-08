import React from 'react';
import ButtonEnd from '../ButtonEnd/ButtonEnd';
import ItemCount from '../ItemCount/ItemCount';

const ShowData = ({onAdd, onSelect, type = 1}) => {
  return  type === 1 
  ? <ItemCount onAdd={onAdd} onSelect={onSelect}/>
  : <ButtonEnd onSelect={onSelect} />
}

export default ShowData