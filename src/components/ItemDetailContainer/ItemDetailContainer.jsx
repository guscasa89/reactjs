import React from "react";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore} from "firebase/firestore"
import "./ItemDetailContainer.scss";

const ItemDetailContainer = () => {

  const { id } = useParams();

  const [item, setItem] = useState(null)

  const [loading, setLoading] = useState(true)

  
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
      <div className="box3">{item && <ItemDetail item={item} />}</div>
   
    )
   );

};

export default ItemDetailContainer;
