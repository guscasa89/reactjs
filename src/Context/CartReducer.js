export const CartReducer = (state, action) => {
    
    switch (action.type) {
      case "ADD_TO_CART":
        return {
            ...state,
            cart: [action.payload.cart],
          };
        
      default:
        return state;
    }
  };