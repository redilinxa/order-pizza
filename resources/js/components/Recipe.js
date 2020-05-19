import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addShipping } from './actions/cartActions'
class Recipe extends Component{

    componentWillUnmount() {
        if(this.refs.shipping.checked)
            this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    render(){

        return(
            <div className="collection">
                <li className="collection-item">
                    <label>
                        <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                        <span>Shipping(+2$)</span>
                    </label>
                </li>
                <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                <li className="collection-item">
                    <input type="textarea" ref="shippingAddress" onChange= {this.handleShippingAddress} />
                </li>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        total: state.total > 0 ? state.total :state.cachedTotal,
        items: state.addedItems.length > 0 ? state.addedItems :state.cachedCart
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
