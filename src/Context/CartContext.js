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

    //const [cartList, setCartList] = useState(initialState);
    /*
    const [cartList, setCartList] = useState(
        JSON.parse(localStorage.getItem('cartList')) || defaultValue);
    
    useEffect(() => {
        localStorage.setItem('cartList',  JSON.stringify(cartList)); 
      }, [cartList]);
 
    */


    
    function addToCart(item, count){

        const updatedCart = [...state.cartList]

        //me devuelve el item del carro si ya esta
        const updatedItemIndex = updatedCart.findIndex(
            element => element.id === item.id
          );


        //si no esta
        if (updatedItemIndex < 0) {
            //lo agregamos con spread o forma antigua
            const newItem = { ...item, cantidad: count }
            //setCartList([...cartList, newItem])
            updatedCart.push(newItem);
            //setCartList(cartList.concat(newItem))
            //console.log(cartList)
            //setCartList(updatedCart);
        } 
        else {
            const updatedItem = {
                ...state.cartList[updatedItemIndex], cantidad:count
              };
                //updatedItem.cantidad = qty;
              updatedCart.splice(updatedItemIndex, 1, updatedItem);

            //setCartList([...cartList, updatedItem.cantidad = qty])
            //setCartList(updatedCart);

        }
        dispatch({
            type: "ADD_TO_CART",
            payload: { updatedCart, count },
          });
        //return { ...state, cart: cartList };
    }


    function removeItem(itemId){
        //console.log("Removing product with id: " + productId);
        const updatedCart = [...state.cartList];
        const updatedItemIndex = updatedCart.findIndex(item => item.id === itemId);

        const updatedItem = {
            ...updatedCart[updatedItemIndex]
         };

         let updateCantidad = state.count - updatedItem.cantidad 
        //si se elimina la cantidad
        //updatedItem.quantity--;
        //if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
        //} else {
        //    updatedCart[updatedItemIndex] = updatedItem;
        //}
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