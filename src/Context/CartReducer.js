export const CartReducer = (state, action) => {

    
    switch (action.type) {
        case "ADD_TO_CART":
            console.log(state)
            return {
                ...state,
                cartList: state.cartList.concat(action.payload.updatedCart)
            };
        case "REMOVE_PRODUCT":
            return {
                ...state,
                cartList: [action.payload.updatedCart],
            };
        case "REMOVE_CART":
            return {
                ...state,
                cartList: [action.payload.updatedCart],
            };
        case "IS_IN_CART":
            return {
                ...state,
                isInCart: [action.payload.esta],
            };
        default:
            return state;
    }

    console.log(state);
};