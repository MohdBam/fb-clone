import React from 'react'
import './Login.css'
import { Button } from '../node_modules/@material-ui/core';
import {auth,provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state,dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then(result=>{
            dispatch({
                type: actionTypes.SET_USER,
                user:result.user
            })
        }).catch(err => {
            alert(err.message)
        })
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://www.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" alt=""/>
                <img src="https://depedbutuancity.files.wordpress.com/2015/04/facebooklogo.png" alt=""/>
            </div>

            <Button type="submit" onClick={signIn}>
            Log in to facebook
            </Button>

        </div>
    )
}

export default Login
