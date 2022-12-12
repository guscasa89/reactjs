import { createContext, useState, useContext } from "react";




export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext);


export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    
    //const [state, dispatch] = useReducer(CartReducer, initialState)

    function addToCart(item, qty){
        
        const updatedCart = [...cartList]
        
        //me devuelve el item del carro si ya esta
        const updatedItemIndex = updatedCart.findIndex(
            element => element.id === item.id
          );
        
        //si no esta
        if (updatedItemIndex < 0) {
            //lo agregamos con spread
            const newItem = { ...item, cantidad: qty }
            updatedCart.push(newItem);
        } 
        else {
            const updatedItem = {
                ...cartList[updatedItemIndex], cantidad:qty
              };

              updatedCart.splice(updatedItemIndex, 1, updatedItem);
            
        }
        setCartList(updatedCart);
    }

/*
    function removeItem(itemId){
        //console.log("Removing product with id: " + productId);
        const updatedCart = [...state.cartList];
        const updatedItemIndex = updatedCart.findIndex(item => item.id === itemId);

        const updatedItem = {
            ...updatedCart[updatedItemIndex]
         };
        //si se elimina la cantidad
        //updatedItem.quantity--;
        //if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
        //} else {
        //    updatedCart[updatedItemIndex] = updatedItem;
        //}
        dispatch({
            type: "REMOVE_PRODUCT",
            payload: { updatedCart },
          });
    }

    function clear(){
        const updatedCart = [];
        
        dispatch({
            type: "REMOVE_CART",
            payload: { updatedCart },
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
    
 */  
    return (
        
        <CartContext.Provider value={{ cartList, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}