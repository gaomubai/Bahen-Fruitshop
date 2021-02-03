import React, { Component } from "react";
import './Banner.css';
import Cart from '../Cart/Cart'

class Banner extends Component{
    render(){
        return(
            <div className="Banner">
                <Cart />
                <h1>Bahen Fruitshop</h1>
            </div>
           
        )
    }
}

export default Banner