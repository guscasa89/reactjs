import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore} from "firebase/firestore"
//import {Items} from '../../mock';


const ItemListContainer = () => {

  const { categoryid } = useParams();

  
  const [itemsList, setItemsList] = useState();
/*
  const Items = [
    {
      id: "1",
      id_cat: "2",
      url: "/img/salad.jpeg",
      titulo: "Ensalada Quinoa",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
      costo: "$200",
    },
    {
      id: "2",
      id_cat: "2",
      url: "/img/salad.jpeg",
      titulo: "Ensalada Caprese",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
      costo: "$200",
    },
    {
      id: "3",
      id_cat: "2",
      url: "/img/salad.jpeg",
      titulo: "Ensalada Cesar",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
      costo: "$200",
    },
    {
      id: "4",
      id_cat: "1",
      url: "/img/freezer.jpeg",
      titulo: "Canelones verdura",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
      costo: "$220",
    },
    {
      id: "5",
      id_cat: "1",
      url: "/img/freezer.jpeg",
      titulo: "Matambre a la leche",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
      costo: "$220",
    },
    {
      id: "6",
      id_cat: "1",
      url: "/img/freezer.jpeg",
      titulo: "Carne estofada",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
      costo: "$220",
    },
    {
      id: "7",
      id_cat: "1",
      url: "/img/freezer.jpeg",
      titulo: "Albondigas de carne",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
      costo: "$220",
    },
    {
      id: "8",
      id_cat: "3",
      url: "/img/sopa.jpeg",
      titulo: "Sopa Calabaza",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
      costo: "$180",
    },
    {
      id: "9",
      id_cat: "3",
      url: "/img/sopa.jpeg",
      titulo: "Sopa Arvejas",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
      costo: "$180",
    },
    {
      id: "10",
      id_cat: "3",
      url: "/img/sopa.jpeg",
      titulo: "Sopa Tomates",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
      costo: "$180",
    },
    {
      id: "11",
      id_cat: "4",
      url: "/img/jugos.jpeg",
      titulo: "Jugo limon y jengibre",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
      costo: "$150",
    },
    {
      id: "12",
      id_cat: "4",
      url: "/img/jugos.jpeg",
      titulo: "Jugo banana y naranja",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!",
      costo: "$150",
    }
  ];
*/
  const darItems = (categoryid, Items) => {

    const newItems = Items.filter(item => item.id_cat == categoryid);

    console.log(newItems)

    return newItems;
  }

/*
  const callListItems = () => {
    
    if(categoryid)
    {
      new Promise((resolve, reject) => setTimeout(() => resolve(darItems(categoryid, Items)), 2000))
      .then((res) => {
        console.log(res);
        setItemsList(res);
      })
      .catch();
    }
    else
    {
      new Promise((resolve, reject) => setTimeout(() => resolve(Items), 2000))
      .then((res) => {
        console.log(res);
        setItemsList(res);
      })
      .catch();
    }
    
    
  };
*/
  
  useEffect(() => {
    const db = getFirestore();

    const Items = collection(db, "items")
    getDocs(Items).then(result => {
      
        //console.log('firestore: ')
        //console.log(result.docs)
        //const arre = result.docs.map((doc) => ({id:doc.id, ...doc.data()}))
        //console.log(arre)
        
        //console.log('firestore consulta -> ' + 
        //console.log(result.docs)

        if(categoryid){
          const arre = result.docs.map((doc) => ({id:doc.id, ...doc.data()}))
          const itemsSelected = arre.filter(item => item.id_cat == categoryid);

          setItemsList(itemsSelected)

        }
        else{
          setItemsList(result.docs.map((doc) => ({id:doc.id, ...doc.data()})))
        }
      
    })
  }, []);
  
  /*
  useEffect(() => {
    callListItems();
  }, []);
  */

  return (
    <div className="box3">
      {itemsList && 
        
          <ItemList  items={itemsList} />
      
      }
      </div>
  );


};

export default ItemListContainer;
