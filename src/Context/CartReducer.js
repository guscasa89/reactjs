export const CartReducer = (state, action) => {
    
    switch (action.type) {
      case "GET_NOMBRE":
        return { ...state, 
            cart: [...state.cart, { ...action.payload, qty: 1 }] 
        };
      case "REMOVE_LIST":
        return {
          ...state,
          cart: state.cart.filter((c) => c.id !== action.payload.id),
        };
      case "DELETE_NOMBRE":
        return {
          ...state,
          cart: state.cart.filter((c) =>
            c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
          ),
        };
      default:
        return state;
    }
  };