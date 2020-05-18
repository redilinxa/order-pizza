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
                                <img src={"/images/"+item.image_url} alt={item.image_url} className=""/>
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
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
export default connect(mapStateToProps)(Order)
