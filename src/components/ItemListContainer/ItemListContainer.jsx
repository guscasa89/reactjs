import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore"
//import {Items} from '../../mock';


const ItemListContainer = () => {

  const { categoryid } = useParams();


  const [itemsList, setItemsList] = useState([]);

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    if (categoryid) {
      const db = getFirestore();

      const Items = collection(db, "items")
      getDocs(Items).then(result => {

        const arre = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        const itemsSelected = arre.filter(item => item.id_cat == categoryid);
        setLoading(false);
        setItemsList(itemsSelected)
        

      })


    }
    else {
      const db = getFirestore();

      const Items = collection(db, "items")
      getDocs(Items).then(result => {
        
        setLoading(false);

        setItemsList(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        

      })
    }


  }, [categoryid]);


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
      <div className="box3">
      {itemsList &&

        <ItemList items={itemsList} />

      }
    </div>
    
     )
    );


};

export default ItemListContainer;
