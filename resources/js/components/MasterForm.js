import React from 'react';
import Home from './Home'
import ReactDOM from 'react-dom';
import {connect} from "react-redux";

class MasterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            pizzas:  '',
            selectedPizzas: '',
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
        const { selectedPizzas } = this.state

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
                        email={this.state.email}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        username={this.state.username}
                    />
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        password={this.state.password}
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
        '<div>some div<\div>'
    );
}

function Step3(props) {
    if (props.currentStep !== 3) {
        return null
    }
    return(
        <React.Fragment>
            <button className="btn btn-success btn-block">Sign up</button>
        </React.Fragment>
    );
}

export default MasterForm;
