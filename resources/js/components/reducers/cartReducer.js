import { LOAD_PRODUCTS,LIST_CART_PRODUCTS, ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'
const initState = {
    items: [],
    addedItems:[],
    total: 0
};

const cartReducer= (state = initState,action)=>{
    console.log(action.type);
    //INSIDE HOME COMPONENT
    if(action.type === LOAD_PRODUCTS){
        return {
            ...state,
            items:action.products
        }
    }
    if(action.type === LIST_CART_PRODUCTS){
        return {
            ...state,
            addedItems:action.products,
            total: action.total
        }
    }
    if(action.type === ADD_TO_CART){
         let addedItem = state.items.find(item=> item.id === action.id)
         //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1
             return{
                ...state,
                 total: state.total + parseFloat(addedItem.price)
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + parseFloat(addedItem.price)

            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (parseFloat(itemToRemove.price) * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1
          let newTotal = state.total + parseFloat(addedItem.price)
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - parseFloat(addedItem.price)
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - parseFloat(addedItem.price)
            return{
                ...state,
                total: newTotal
            }
        }

    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 2
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 2
        }
  }

  else{
    return state
    }

}

export default cartReducer
