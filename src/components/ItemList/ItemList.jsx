import React from "react";
import Item from '../Item/Item';

const ItemList = ({ items }) => {
  return (
    
    <section className="menu">
        {items.map((item) => {
          return <div key={item.titulo} className="item">
              <Item item={item}/>
          </div>;
        })}
      </section>
  );
};

export default ItemList;
