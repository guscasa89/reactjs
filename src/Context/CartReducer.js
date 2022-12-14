export const CartReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            
            console.log(action.payload.cartList)
            return {
                ...state,
                cartList: action.payload.cartList
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


};