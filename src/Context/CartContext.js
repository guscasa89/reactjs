import { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext(null)

const initialState = {
    nombre: "Hugo"
}

export const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initialState)

    function darNombre(nombre){
        dispatch({
            type: "GET_NOMBRE",
            payload: {nombre}
        })
    }

    function borrarNombre(nombre){
        dispatch({
            type: "DELETE_NOMBRE",
            payload: {nombre}
        })
    }

    return (
        <CartContext.Provider
        value={{
            nombre: state.nombre,
            darNombre,
            borrarNombre
        }}
        >
            {children}
        </CartContext.Provider>
    )
}