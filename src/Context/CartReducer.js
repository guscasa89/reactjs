export const CartReducer = (state, action) => {

    const updatedCart = [...state.cartList]
    

    switch (action.type) {
        case "ADD_TO_CART":

            //me devuelve el item del carro si ya esta
            const updatedItemIndex = updatedCart.findIndex(
                element => element.id === action.payload.item.id
            );

            //si no esta
            if (updatedItemIndex < 0) {
                //lo agregamos con spread o forma antigua
                const newItem = {
                    ...action.payload.item,
                    cantidad: action.payload.count
                }
                //setCartList([...cartList, newItem])
                updatedCart.push(newItem);
                //setCartList(cartList.concat(newItem))
                //console.log(cartList)
            } else {
                const updatedItem = {
                    ...state.cartList[updatedItemIndex],
                    cantidad: action.payload.count
                };
                //updatedItem.cantidad = qty;
                updatedCart.splice(updatedItemIndex, 1, updatedItem);

            }

            return {
                ...state,
                cartList: updatedCart,
                qty: state.qty + action.payload.count,
                isInCart: state.isInCart
            };

        case "REMOVE_PRODUCT":
            //console.log("Removing product with id: " + productId);
            const updatedItemIndex2 = updatedCart.findIndex(item => item.id === action.payload.itemId);

            const updatedItem = {
                ...updatedCart[updatedItemIndex2]
            };
            //si se elimina la cantidad
            //updatedItem.quantity--;
            //if (updatedItem.quantity <= 0) {
            updatedCart.splice(updatedItemIndex2, 1);
            //} else {
            //    updatedCart[updatedItemIndex] = updatedItem;
            //}
            return {
                ...state,
                cartList: updatedCart,
                    isInCart: state.isInCart
            };
        case "REMOVE_CART":
            return {
                ...state,
                cartList: action.payload.updatedCart,
                    isInCart: state.isInCart
            };
        case "IS_IN_CART":
            let esta = false;

            //me devuelve el item del carro si ya esta
            const updatedItemIndex3 = updatedCart.findIndex(
                element => element.id === action.payload.itemId
            );

            //si no esta
            if (updatedItemIndex3 >= 0) {
                esta = true;
            }
            return {
                ...state,
                cartList: updatedCart,
                isInCart: esta
            };
        default:
            return state;
    }


};