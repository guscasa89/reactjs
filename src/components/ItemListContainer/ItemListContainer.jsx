import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
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

  const [itemsList, setItemsList] = useState();

  const callListItems = () => {
    new Promise((resolve, reject) => setTimeout(() => resolve(Items), 2000))
      .then((res) => {
        console.log(res);

        setItemsList(res);
      })

      .catch();
  };

  useEffect(() => {
    callListItems();
  }, []);

  return (
    <div className="box3">{itemsList && <ItemList items={itemsList} />}</div>
  );
};

export default ItemListContainer;
