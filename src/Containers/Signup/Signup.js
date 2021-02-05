import React, { Component } from "react";
import { Route, Link, Switch } from 'react-router-dom';

import './Signup.css';

import profile from '../../Assets/Images/profile.jpeg'
import MainPage from '../MainPage/MainPage'
import Login from '../Login/Login'


const axios = require('axios').default;

class Signup extends Component{
    state = {
        username: '',
        password: ''
    }
    handleSignup() {
        const username = this.state.username;
        const password = this.state.password;



        axios.post('/api/user/register', {
            username: username,
            password: password,
          })
          .then(function (response) {
            console.log(response);
            if (response.status === 200) {
                //TODO: 可以删掉
                alert("Sucessfully login!");
                this.context.router.push('/mainPage');
                // 跳过去

            } else {
                alert("Fail!");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render(){
        return (
            <div >
                <section className='sign-up'>
                    <h2>Signup Form</h2>

                    <form action="/action_page.php" method="post">
                        <div className="imgcontainer">
                            <img src={profile} alt="Avatar" className="avatar" />
                        </div> 
                        
                        <div class="container">
                            <label for="uname"><b>Username</b></label>
                            <input value={this.state.username} onChange={(event) => this.setState({username: event.target.value})} type="text" placeholder="Enter Username" name="uname" required/>

                            <label for="psw"><b>Password</b></label>
                            <input value={this.state.password} onChange={(event) => this.setState({password: event.target.value})} type="password" placeholder="Enter Password" name="psw" required/>
                                
                            <button type="submit" onClick={this.handleSignup} className='loginbutton'> Sign up and Login</button>
                            
                        </div>

                        <div class="container">
                            <button type="button" class="cancelbtn" className='loginbutton'><Link to='/'>Cancel</Link></button>
                        </div>
                    </form>
                </section>
                


                <Route path="/mainpage" exact component={MainPage} />
                <Route path="/" exact component={Login} />


                
            </div>
            
        )
    }
}

export default Signup