import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Login from './Containers/Login/Login'
import MainPage from './Containers/MainPage/MainPage'
import Signup from './Containers/Signup/Signup'

import './App.css';
import "antd/dist/antd.css";

class App extends Component {
  render (){
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/mainpage" exact component={MainPage} />
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
        </Switch>
      </BrowserRouter>
      
    );
  }
  
}

export default App;
