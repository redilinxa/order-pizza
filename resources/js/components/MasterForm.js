import React from 'react';
import Home from './Home'
import Cart from "./Cart";
import Order from "./Order";
import axios from 'axios';
import {connect} from "react-redux";

class MasterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            shippingAddress:  '',
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.props)
        const { shippingAddress } = this.state
        var bodyFormData = new FormData();
        bodyFormData.set('total', this.props.total);
        bodyFormData.set('shippingAddress', shippingAddress);
        let details = [];
        this.props.items.map(item=>{
            details.push({
                'product_id':item.id,
                'quantity':item.quantity
            });
        })
        console.log(details);
        bodyFormData.set('details', JSON.stringify(details));
        axios({
            method: 'post',
            url: 'orders/create',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2? 3: currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    /*
    * the functions for our button
    */
    previousButton() {
        let currentStep = this.state.currentStep;
        if(currentStep !==1){
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={this._prev}>
                    Previous
                </button>
            )
        }
        return null;
    }

    nextButton(){
        let currentStep = this.state.currentStep;
        if(currentStep <3){
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this._next}>
                    Next
                </button>
            )
        }
        return null;
    }

    render() {

        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    {this.previousButton()}
                    {this.nextButton()}
                    {/*
                       render the form steps and pass required props in
                    */}
                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                    />
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        shippingAddress={this.state.shippingAddress}
                    />
                </form>
            </React.Fragment>
        );
    }
}

function Step1(props) {
    if (props.currentStep !== 1) {
        return null
    }
    return(
        <Home />
    );
}

function Step2(props) {
    if (props.currentStep !== 2) {
        return null
    }
    return(
        <Cart />
    );
}

function Step3(props) {
    if (props.currentStep !== 3) {
        return null
    }
    return(
        <React.Fragment>
            <Order />
            <button className="btn btn-success btn-block">Confirm order!</button>
        </React.Fragment>
    );
}

const mapStateToProps = (state)=>{
    return{
        total: state.total > 0 ? state.total :state.cachedTotal,
        items: state.addedItems.length > 0 ? state.addedItems :state.cachedCart
    }
}

export default connect(mapStateToProps)(MasterForm)
