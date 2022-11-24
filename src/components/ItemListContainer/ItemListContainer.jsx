import PropTypes from 'prop-types'
import "./ItemListContainer.scss";

const ItemListContainer = ({listas}) =>{
    return(
        <div className="box3">
        
          <section className="menu">
              {
                  listas.map((item) =>
                  {
                    
                    return <div key={item} className={item}></div>
                                      
                  })
              }
          </section>
          
        </div>
        
    )

}

ItemListContainer.proptype = {
    listas: PropTypes.array.isRequired
}

export default ItemListContainer;