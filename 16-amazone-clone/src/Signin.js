import React, { useState } from 'react';
import './Signin.css';
import firebase from './firebase';
import { useHistory} from 'react-router-dom';

const Singin = () => {

    let [email,setEmail]=useState('');
    let [password,setPassword]=useState('');

    let history=useHistory();

    const register=()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{history.push('/')});
        setEmail('');
        setPassword('');
    }

    const login=()=>{
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{history.push('/')})
        setEmail('');
        setPassword('');
    }



    return (
        <>
            <div className="signin">
                <div className="sigin-logo">
                    <img className="signin-logo-img" src="http://pngimg.com/uploads/amazon/amazon_PNG12.png" alt="amazon" />
                </div>
                <div className="signin-form">
                    <h5>E-mail</h5>
                    <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input required type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                    <button className="signin-btn" onClick={login}>Sign in</button>
                    <p>By signining-in you agree to Amazone's Condition of Use & Sale.Please save our Privacy notice. </p>
                    <button onClick={register}>Create your Amazone Account</button>
                </div>
            </div>
        </>
    )
}

export default Singin;