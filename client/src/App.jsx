import { useState } from 'react';

import './style/App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';
import LoginScreen from './features/LoginScreen.jsx';

function App() {
    const [isLogged, setIsLogged] = useState(false);
    const [loginState, setLoginState] = useState("off");
    const [authToken, setAuthToken] = useState(null);

    // handle header auth box
    const signupBtn = () => {
        setLoginState("Sign Up");
    }
    const loginBtn = () => {
        setLoginState("Log In");
    }
    const logoutBtn = () => {
        setAuthToken(null);
        setIsLogged(false);
    }

    // handle signin and login
    const submitLogin = (username, password) => {
        const signupUser = async () => {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/users/register`, {
                method: "POST",
                body: JSON.stringify({name: username, password}),
                headers: {
                    "Content-Type":"application/json"
                }
            });
            
            if (response.status !== 201)
                throw new Error("Signup unsuccessful");
        }
        const loginUser = async () => {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/users/login`, {
                method: "POST",
                body: JSON.stringify({name: username, password}),
                headers: {
                    "Content-Type":"application/json"
                }
            });
            
            if (response.status !== 200)
                throw new Error("Login unsuccessful");

            const {token} = await response.json();
            
            setAuthToken(token);
            setIsLogged(true);
        }

        try {
            if (loginState === "Sign Up")
                signupUser();
                loginUser();
            if (loginState === "Log In")
                loginUser();
            setLoginState("off");
        } catch (err) {
            window.alert(err);
        }
    }

    return (
        <>
            <Header logged={isLogged} 
                signupBtn={signupBtn} 
                loginBtn={loginBtn}
                logoutBtn={logoutBtn}
            />

            {loginState !== "off" ? 
                <LoginScreen loginState={loginState} submitLogin={submitLogin}/> : 
                <></>
            }

            <Content/>

            <Footer/>
        </>
    );
}

export default App;
