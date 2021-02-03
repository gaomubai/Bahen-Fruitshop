import React, { Component } from "react";
import './Login.css';
import profile from '../../Assets/Images/profile.jpeg'

class Login extends Component{
    render(){
        return (
            <div className='login'>
                <h2>Login Form</h2>

                <form action="/action_page.php" method="post">
                    <div className="imgcontainer">
                        <img src={profile} alt="Avatar" className="avatar" />
                    </div>

                    <div class="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required/>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required/>
                            
                        <button type="submit" className='loginbutton'>Login</button>
                        <label>
                        <input type="checkbox" checked="checked" name="remember" value = 'Remember me'/> 
                        </label>
                    </div>

                    <div class="container">
                        <button type="button" class="cancelbtn" className='loginbutton'>Cancel</button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div>
                </form>
            </div>
            
        )
    }
}

export default Login