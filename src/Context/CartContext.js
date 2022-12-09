import { createContext, useReducer, useState } from "react";
import { CartReducer } from "./CartReducer";

//mi arreglo vacio
const initialState = {
    cartList: []
}

export const CartContext = createContext(null)



export const CartContextProvider = ({children}) => {

    //const [cartList, setCartList] = useState([])
    
    const [state, dispatch] = useReducer(CartReducer, initialState)

    function addToCart(item, qty){
        
        const updatedCart = [...state.cartList]
        
        //me devuelve el item del carro si ya esta
        const updatedItemIndex = updatedCart.findIndex(
            element => element.id === item.id
          );

        
        //si no esta
        if (updatedItemIndex < 0) {
            //lo agregamos con spread o forma antigua
            const newItem = { ...item, cantidad: qty }
            //setCartList([...cartList, newItem])
            updatedCart.push(newItem);
            //setCartList(cartList.concat(newItem))
            //console.log(cartList)
        } 
        else {
            const updatedItem = {
                ...state.cartList[updatedItemIndex], cantidad:qty
              };
                //updatedItem.cantidad = qty;
              updatedCart.splice(updatedItemIndex, 1, updatedItem);
              
            //setCartList([...cartList, updatedItem.cantidad = qty])
            
        }
        dispatch({
            type: "ADD_TO_CART",
            payload: { ...state, cartList: updatedCart },
          });
        //return { ...state, cart: cartList };
    }


    /*
    function borrarNombre(nombre){
        dispatch({
            type: "DELETE_NOMBRE",
            payload: {nombre}
        })
    }
    */
   console.log("Arreglo -> " + {...state})
    return (
        <CartContext.Provider value={{ cart: state.cartList, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}