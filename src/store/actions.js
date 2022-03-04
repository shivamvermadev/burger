import axios from 'axios';

export const addIngredients = (name) => {
    return {
        type: 'ADD_INGREDIENT',
        ingredientName: name
    };
};

export const removeIngredients = (name) => {
    return {
        type: 'REMOVE_INGREDIENT',
        ingredientName: name
    };
};

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: 'PURCHASE_BURGER_SUCCESS',
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: 'PURCHASE_BURGER_FAIL',
        error: error
    };
};

export const purchaseBurgerStart = () => {
    return {
        type: 'PURCHASE_BURGER_START'
    }
}

export const purchaseBurger = (orderData, thisPropsHistory) => {
    return (dispatch) => {
        dispatch(purchaseBurgerStart());
        axios.post("https://myburger-b6fec-default-rtdb.firebaseio.com/orders.json", orderData)
            .then((result) => {
                dispatch(purchaseBurgerSuccess(result.data, orderData));
                thisPropsHistory.replace("/");
            })
            .catch((err) => {
                dispatch(purchaseBurgerFail(err));
            })
    };
};