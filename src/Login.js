import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory} from "react-router-dom";
import { auth } from "./firebase";



function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    //SIGN IN CODE IN LOGIN.JS
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
        })
        .catch(error => alert(error.message))


        //Firebase Login is so fucking cool...
    }




     //REGISTER CODE IN LOGIN.JS
    const register = e => {
        e.preventDefault();

        //This snippet of code do some fancy firebase register
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //It successfully created a new user with email and password
                if (auth) {
                   history.push('/')

                    
                }
                
            })
            .catch(error => alert(error.message))
    }
        
        



        return (
            <div className='login'>
            

                <div className='login__container'>
                    

                <Link to='/login'/>
            
                    <img className='login__logo' src='https://pngimg.com/uploads/bitcoin/bitcoin_PNG44.png' />

              
                
                    <h1>Sign In</h1>

                    <form>
                        <h5>Email</h5>
                        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    
                        <h5>Password</h5>
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    

                  
                        <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                    </form>
                
                    <p>
                        By Sining-in you agree to CryptoMarket's Condition of Use & Sale.
                        Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.

                         
                        
                </p>
                 

                    <button className='login__registerButton' onClick={register}>Create CryptoMarket Account </button>
                

                </div>
                
            
                 <h5 className="footer"> All Rights Reserved 2021 @ Isidro P. Ampig III</h5>
            </div>
            
        )
    }


export default Login