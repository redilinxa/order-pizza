import axios from 'axios'
import {LOAD_PRODUCTS, LIST_CART_PRODUCTS, ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, CLEAR_ORDER} from './action-types/cart-actions'

export function getProducts(){
    return function(dispatch){
        return axios.get('/api/products').then(response => {
            dispatch({type:LOAD_PRODUCTS, products: response.data})
        })
    }
}

export function listCartProducts(){
    return function(dispatch){
        return axios.get('/cart').then(response => {
            console.log(response.data);
            dispatch({type:LIST_CART_PRODUCTS, products: response.data.products, total:response.data.total})
        })
    }
}


export const clearOrder=()=>{
    return{
        type: CLEAR_ORDER
    }
}
//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
