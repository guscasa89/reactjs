import React from "react";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const { id } = useParams();

    {/* Me tengo que traer de nuevo el arreglo? */}
    const Items = [
        {
          id: "1",
          url: "/img/salad.jpeg",
          titulo: "Ensalada",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
          costo: "$200",
        },
    
        {
          id: "2",
          url: "/img/freezer.jpeg",
          titulo: "Congelados",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
          costo: "$220",
        },
    
        {
          id: "3",
          url: "/img/sopa.jpeg",
          titulo: "Sopas",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
          costo: "$180",
        },
    
        {
          id: "4",
          url: "/img/jugos.jpeg",
          titulo: "Jugos",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
          costo: "$150",
        },
      ];

      item = {}
      for (const obj in Items) {
        if(obj.id = id)
            item = obj;
      }
    
  const [item, setItem] = useState();



  const getItem = () => {
    new Promise((resolve, reject) => setTimeout(() => resolve(Item), 2000))
      .then((res) => {
        console.log(res);

        setItem(res);
      })

      .catch();
  };

  useEffect(() => {
    getItem();
  }, []);

  return <div>{item && <ItemDetail item={item} />}</div>;

};

export default ItemDetailContainer;
