import React, { Component } from "react";
import './MainPage.css';

import Banner from '../../Components/Banner/Banner'
import CardList from '../../Components/CardList/CardList'
import Login from '../Login/Login'

class MainPage extends Component{

    render(){
        return(
            <div>
                <Banner />
                <CardList />
                <Login />
            </div>
            
        )
    }
}

export default MainPage;