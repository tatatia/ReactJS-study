import React, { Component } from "react";
import "./stylesNew.css";
import Fcomponent3 from "./Fcomponent3"


export default class Ccomponent3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Button not pressed"
        };
        this.updateData = this.updateData.bind(this);
    }
    updateData = (value) => {
        this.setState({
            name: value
        })
    }
    render() {
        return (
            <div>
               <p>State: {this.state.name}</p>
               
               <Fcomponent3 updateData={this.updateData}/>

            </div>
        )
    }
}