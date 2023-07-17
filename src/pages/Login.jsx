import React from 'react';
import MyInput from '../components/ui/input/MyInput';
import MyButton from '../components/ui/button/MyButton';
import { useContext } from 'react';
import { AuthContext } from '../context/context';
import cl from "../styles/Login.module.css";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className={cl.body}>
        <form onSubmit={login}>
            <h1 className={cl.login}>Login</h1>
            <input className={cl.login__form} type="email" name="email" placeholder="Email" required=""/>
            <input className={cl.login__form} type="password" name="pswd" placeholder="Password" required=""/>
            <MyButton className={cl.login__button}>Login</MyButton>
        </form>
    </div>
    )}

export default Login;