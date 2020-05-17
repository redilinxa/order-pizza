import axios from 'axios'
import React, { Component } from 'react'

class ProductList extends Component {
    constructor () {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount () {
        axios.get('/api/products').then(response => {
            this.setState({
                products: response.data
            })
        })
    }
    render(){
        const { products } = this.state;
        console.log(products)
        return ({products});
    };
}
export default ProductList;
