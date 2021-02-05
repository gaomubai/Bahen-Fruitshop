import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';

import './MainPage.css';

import Banner from '../../Components/Banner/Banner'
import CardList from '../../Components/CardList/CardList'

class MainPage extends Component{

    render(){
        return(
            <div className="MainPage">
                
                <Banner />
                <CardList />
            </div>
            
        )
    }
}

export default MainPage;