import PropTypes from 'prop-types'

const List = ({listas}) =>{
    return(
        <div>
            {
                listas.map((lista)=>{
                    return <p>{lista}</p>
                }
                )
            }
        </div>
    )
}

List.proptype = {
    listas: PropTypes.array.isRequired
}

export default List;