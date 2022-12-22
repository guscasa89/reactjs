import { createContext, useState, useEffect, useContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";



export const CartContext = createContext(null)
export const useCartContext = () => useContext(CartContext);

const initialState = {
    cartList: [],
    isInCart: false, 
    count: 0
}

export const CartContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(CartReducer, initialState)

    
    function addToCart(item, count){

        const updatedCart = [...state.cartList]

        //me devuelve el item del carro si ya esta
        const updatedItemIndex = updatedCart.findIndex(
            element => element.id === item.id
          );


        //si no esta
        if (updatedItemIndex < 0) {
            const newItem = { ...item, cantidad: count }
            updatedCart.push(newItem);

        } 
        else {
            const updatedItem = {
                ...state.cartList[updatedItemIndex], cantidad:count
              };
              updatedCart.splice(updatedItemIndex, 1, updatedItem);

        }
        dispatch({
            type: "ADD_TO_CART",
            payload: { updatedCart, count },
          });
    }


    function removeItem(itemId){

        const updatedCart = [...state.cartList];
        const updatedItemIndex = updatedCart.findIndex(item => item.id === itemId);

        const updatedItem = {
            ...updatedCart[updatedItemIndex]
         };

         let updateCantidad = state.count - updatedItem.cantidad 
        updatedCart.splice(updatedItemIndex, 1);

        dispatch({
            type: "REMOVE_PRODUCT",
            payload: { updatedCart , updateCantidad },
          });
    }

    function clear(){
        const updatedCart = [];
        let cantidad = 0;
        
        dispatch({
            type: "REMOVE_CART",
            payload: { updatedCart , cantidad },
          });
    }

    function estaEnCart(itemId){
        let esta = false;
        const updatedCart = [...state.cartList]

        //me devuelve el item del carro si ya esta
        const updatedItemIndex = updatedCart.findIndex(
            element => element.id === itemId
          );

        //si no esta
        if (updatedItemIndex >= 0) {
            esta = true;
        } 
        
        dispatch({
            type: "IS_IN_CART",
            payload: { esta },
          });
    }
    
 
    return (
        
        <CartContext.Provider value={{ 
            cartList: state.cartList, 
            count: state.count,
            addToCart, 
            clear,
            removeItem }}>
            {children}
        </CartContext.Provider>
    )
}