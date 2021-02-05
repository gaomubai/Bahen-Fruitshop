import React, { Component } from "react";
import './Card.css';
import banana from '../../Assets/Images/banana.jpg'
// 
import Comments from '../Comments/Comments'
// bu
const Card = (props) => {
  
        return(
            <div className='Card'>
                <img src={banana} alt="banana"/>
                <div className='cardText'>
                    <h3>{props.itemname}</h3>
                    <p>{props.price}</p>
                    <div className='cardButton'>
                        <button onClick={props.clicked}>Add to cart</button>
                        <Comments />
                    </div>
                    
                </div>
            </div>
        )
        

    
}

export default Card