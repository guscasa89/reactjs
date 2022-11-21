import PropTypes from 'prop-types'
import "./List.scss";

const List = ({listas}) =>{
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

List.proptype = {
    listas: PropTypes.array.isRequired
}

export default List;