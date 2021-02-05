import React, { Component } from "react";
import './CardList.css';

import Card from '../Card/Card';


import axios from 'axios';

class CardList extends Component{
    state = {
        items: [],
        selectedItemName: null,
        error: false,
    }

    componentDidMount (){
        axios.get( '/mainpage' )
            .then( response => {

                //todo:data?
                const items = response.data.map(post => {
                    return {post}
                })
                this.setState({items: items})
            }

            )
            .catch(error => {
                this.setState({error: true})
            })
    }

    addSelectedHandler = (item) => {
        //todo!!
        this.setState({selectedItemName: item})
    }

    render(){
        let items = <p style={{textAlign: 'center'}}>No items are available now.</p>;
        if (!this.state.error){
            items = this.state.items.map(item =>{
                return <Card 
                    className='card'
                    itemname={item.itemname}
                    price={item.price}
                    clicked={() => this.addSelectedHandler(item.itemname)}
                    />;
            })
        }
        return(
            <div className='CardList'>
                {items}
            </div>
        )
    }
}

export default CardList