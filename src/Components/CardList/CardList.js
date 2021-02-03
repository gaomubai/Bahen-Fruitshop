import React, { Component } from "react";
import './CardList.css';

import Card from '../Card/Card'

class CardList extends Component{
    render(){
        return(
            <div className='CardList'>
                <Card className='card'/>
                <Card />
                <Card />
            </div>
        )
    }
}

export default CardList