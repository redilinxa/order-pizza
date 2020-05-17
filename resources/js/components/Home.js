import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addToCart, getProducts} from './actions/cartActions'

class Home extends Component{

    constructor(props) {
        super(props);
        props.getProducts();
    }

    handleClick = (id)=>{
        this.props.addToCart(id);
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card-product" key={item.id}>
                    <div className="card-header">{item.name}</div>
                    <div className="card-image">
                        <img src={'/images/'+item.image_url} alt={item.name}/>

                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">+</i></span>
                    </div>

                    <div className="card-content">
                        <p>{item.description}</p>
                        <p><b>Price: {item.price}$</b></p>
                    </div>
                </div>
            )
        })

        return(
            <div>
                <div className="center"><h1>Choose your delight!</h1></div>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
}
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        getProducts: ()=>{dispatch(getProducts())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
