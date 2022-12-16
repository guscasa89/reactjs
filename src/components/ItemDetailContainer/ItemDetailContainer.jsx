import React from "react";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {

  const { id } = useParams();

  const [item, setItem] = useState(null)

  const [loading, setLoading] = useState(true)

  /*
  const darItem = (id) => {
    var item = {};
    switch (id) {
      case "1":
        item = {
          id: "1",
          id_cat: "2",
          url: "/img/salad.jpeg",
          titulo: "Ensalada Quinoa",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
          costo: "$200",
        }

        break;
      case "2":
        item = {
          id: "2",
          id_cat: "2",
          url: "/img/salad.jpeg",
          titulo: "Ensalada Caprese",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
          costo: "$200",
        }
        break;
      case "3":
        item = {
          id: "3",
          id_cat: "2",
          url: "/img/salad.jpeg",
          titulo: "Ensalada Cesar",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
          costo: "$200",
        }
        break;
      case "4":
        item = {
          id: "4",
          id_cat: "1",
          url: "/img/freezer.jpeg",
          titulo: "Canelones verdura",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
          costo: "$220",
        }
        break;
      case "5":
        item =
        {
          id: "5",
          id_cat: "1",
          url: "/img/freezer.jpeg",
          titulo: "Matambre a la leche",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
          costo: "$220",
        }
        break;
      case "6":
        item =
        {
          id: "6",
          id_cat: "1",
          url: "/img/freezer.jpeg",
          titulo: "Carne estofada",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
          costo: "$220",
        }
        break;
      case "7":
        item =
        {
          id: "7",
          id_cat: "1",
          url: "/img/freezer.jpeg",
          titulo: "Albondigas de carne",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
          costo: "$220",
        }
        break;
      case "8":
        item =
        {
          id: "8",
          id_cat: "3",
          url: "/img/sopa.jpeg",
          titulo: "Sopa Calabaza",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
          costo: "$180"
        }
        break;
      case "9":
        item =
        {
          id: "9",
          id_cat: "3",
          url: "/img/sopa.jpeg",
          titulo: "Sopa Arvejas",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
          costo: "$180"
        }
        break;
      case "10":
        item =
        {
          id: "10",
          id_cat: "3",
          url: "/img/sopa.jpeg",
          titulo: "Sopa Tomates",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
          costo: "$180"
        }
        break;
      case "11":
        item =
        {
          id: "11",
          id_cat: "4",
          url: "/img/jugos.jpeg",
          titulo: "Jugo limon y jengibre",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
          costo: "$150"
        }
        break;
      case "12":
        item =
        {
          id: "12",
          id_cat: "4",
          url: "/img/jugos.jpeg",
          titulo: "Jugo banana y naranja",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
          costo: "$150"
        }
        break;
      default:
        break;
    }

    return item;
  }


  const getItem = () => {

    var Item = darItem(id);

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
*/

useEffect(() => {
  const db = getFirestore();

    const Items = collection(db, "items")
    getDocs(Items).then(result => {
      
      const arre = result.docs.map((doc) => ({id:doc.id, ...doc.data()}))
      const itemSelected = arre.filter(item => item.id == id);
        
      setLoading(false);  
      setItem(itemSelected[0]);
      
    })
}, [id]);


   return (
   loading ? 
    (
      <div className='row justify-content-center'>
        <div className="spinner-grow text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>  
      </div>
    ):
    (
      <div>{item && <ItemDetail item={item} />}</div>
   
    )
   );

};

export default ItemDetailContainer;
