import React, { Component } from 'react';
import { connect } from 'react-redux'
import { listCartProducts, removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import Recipe from "./Recipe";
class Cart extends Component{

    constructor(props) {
        super(props);
    }

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
        this.forceUpdate();
    }
    //to subtract from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
        this.forceUpdate();
    }
    render(){

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item=>{
                    return(

                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img">
                                <img src={"/images/"+item.image_url} alt={item.image_url} className=""/>
                            </div>

                            <div className="item-desc d-flex w-100">
                                <div>
                                    <span className="title">{item.name}</span>
                                    <p>{item.description}</p>
                                </div>
                                <div className="ml-auto">
                                    <p><b>Price: {item.price}€</b></p>
                                    <p>
                                        <b>Quantity: {item.quantity}</b>
                                    </p>
                                    <div className="add-remove">
                                        <button type="button"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></button>
                                        <button type="button"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></button>
                                    </div>
                                    <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                </div>
                            </div>

                        </li>

                    )
                })
            ):
            (
                <p>No pizzas to order.</p>
            )
        return(
            <div className="cart">
                <h5>You have ordered:</h5>
                <ul className="collection">
                    {addedItems}
                    <li className="collection-item justify-content-end"><b>Total: {this.props.cartTotal} €</b></li>
                    <li className="collection-item justify-content-end"><b>Total (US Dollar): {(this.props.cartTotal * 1.1).toFixed(2)} $</b></li>
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    console.log(state.addedItems,state.cachedCart)
    return{
        items: state.addedItems.length>0 ?state.addedItems :state.cachedCart,
        cartTotal: state.total > 0 ? state.total :state.cachedTotal
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))},
        listCartProducts: ()=>{dispatch(listCartProducts())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
