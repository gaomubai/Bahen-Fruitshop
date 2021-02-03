import React, { Component } from "react";
import './Card.css';
import banana from '../../Assets/Images/banana.jpg'

class Card extends Component{
    render(){
        return(
            <div className='Card'>
                <img src={banana} alt="banana"/>
                <div className='cardText'>
                    <h3>Banana</h3>
                    <p>$2.0</p>
                    <div className='cardButton'>
                        <button>Add to cart</button>
                        <button>Comments</button>
                    </div>
                    
                </div>
            </div>
        )
        

    }
}

export default Card