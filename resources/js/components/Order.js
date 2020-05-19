import React, { Component } from 'react';
import { connect } from 'react-redux'
import Recipe from "./Recipe";
class Order extends Component{

    render(){
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item=>{
                    return(

                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img">
                                <img src={"/images/"+item.image_url} alt={item.image_url}/>
                            </div>

                            <div className="item-desc d-flex w-100">
                                <div>
                                    <span className="title">{item.name}</span>
                                    <p>{item.description}</p>
                                </div>
                                <div className="ml-auto">
                                    <p><b>Price: {item.price}$</b></p>
                                    <p>
                                        <b>Quantity: {item.quantity}</b>
                                    </p>
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
                </ul>
                <Recipe />
                <button className="btn btn-success btn-block" disabled={this.props.items.length == 0 ? 'disabled' : ''}>Confirm order!</button>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems.length>0 ?state.addedItems :state.cachedCart
    }
}
export default connect(mapStateToProps)(Order)
