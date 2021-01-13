import React, { Component } from 'react'


export default class Ccomponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imput: ''
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} />
                <h5>Controle imput:</h5>
                <h3>{this.state.input}</h3>
            </div>
        );
    }

}
