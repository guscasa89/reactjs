import { createContext,  useReducer } from "react";
import { CartReducer } from "./CartReducer";



export const CartContext = createContext(null)

const initialState = {
    cartList: [],
    isInCart: false, 
    qty: 0
}

export const CartContextProvider = ({children}) => {

    //const [cartList, setCartList] = useState([])
    
    const [state, dispatch] = useReducer(CartReducer, initialState)

    function addToCart(item, count){
        dispatch({
            type: "ADD_TO_CART",
            payload: { item, count },
          });
        
    }

    function removeItem(itemId){
        dispatch({
            type: "REMOVE_PRODUCT",
            payload: { itemId },
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
        
        
        dispatch({
            type: "IS_IN_CART",
            payload: { itemId },
          });
    }
    
    console.log("carrito: " + state.cartList.length);
    return (
        
        <CartContext.Provider value={{ 
            cartList: state.cartList, 
            qty: state.qty,
            isInCart:state.isInCart,
            addToCart }}>
            {children}
        </CartContext.Provider>
    )
}