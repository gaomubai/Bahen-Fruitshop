import React, { Component } from "react";
import { Route, Link, Switch } from 'react-router-dom';

import './Login.css';

import profile from '../../Assets/Images/profile.jpeg'
import MainPage from '../MainPage/MainPage'
import Signup from '../Signup/Signup'

import axios from 'axios';

class Login extends Component{
    state = {
        username: '',
        password: ''
    }

    handleLogin() {
        
        const username = this.state.username;
        const password = this.state.password;

        axios.post('/api/user/login', {
            username: username,
            password: password,
          })
          .then(response => {
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
                <section className='login'>
                    <h2>Login Form</h2>

                    <form>
                        <div className="imgcontainer">
                            <img src={profile} alt="Avatar" className="avatar" />
                        </div>
                        <div className="sign-up">
                            <Link to='/signup'>sign up here!</Link>
                          
                        </div>
                        
                        
                        <div class="container">
                            <label for="uname"><b>Username</b></label>
                            <input type="text" value={this.state.username} onChange={(event) => this.setState({username: event.target.value})} placeholder="Enter Username" name="uname" required/>

                            <label for="psw"><b>Password</b></label>
                            <input type="password" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})} placeholder="Enter Password" name="psw" required/>
                                
                            <button onClick={this.handleLogin} type="submit" className='loginbutton'>Login</button>
                            
                        </div>

                        <div class="container">
                            <button type="button" class="cancelbtn" className='loginbutton'><Link to='/mainpage'>Skip</Link></button>
                        </div>
                    </form>
                </section>
                


                <Route path="/mainpage" exact component={MainPage} />
                <Route path="/signup" exact component={Signup} />



                
            </div>
            
        )
    }
}

export default Login