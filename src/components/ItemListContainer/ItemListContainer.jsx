import PropTypes from 'prop-types'
import "./ItemListContainer.scss";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({listas}) =>{

    const Items = [
        {
          url: '/img/salad.jpg',
          titulo: 'Ensalada',
          descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!',
          costo: '$200'
         },
         {
          url: '/img/frezzer.jpg',
          titulo: 'Congelados',
          descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!',
          costo: '$220'
         },
         {
            url: '/img/sopa.jpg',
            titulo: 'Sopas',
            descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!',
            costo: '$180'
           },
           {
            url: '/img/jugos.jpg',
            titulo: 'Jugos',
            descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, ipsum. Sapiente harum error aliquid accusamus quidem ullam delectus aspernatur debitis!',
            costo: '$150'
           }
      ]
      

    return(
        <div className="box3">
        
        <ItemList items={Items}/>
          
        </div>
        
    )

}

ItemListContainer.proptype = {
    listas: PropTypes.array.isRequired
}

export default ItemListContainer;