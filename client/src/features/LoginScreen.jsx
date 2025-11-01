import { useState } from "react";
import "../style/Login.css";

export default function LoginScreen({loginState, submitLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div id="login-screen">
            <h3> {loginState} </h3>

            <form onSubmit={(event) => {
                event.preventDefault();
                submitLogin(username, password);
            }}>
                <div id="login-input-container">

                    <p className="login-input">
                        Username: <br />
                        <input type="text" name="name" id="login-input-username" 
                            onChange={(event) => setUsername(event.currentTarget.value)} />
                    </p>
                    <p className="login-input">
                        Password: <br />
                        <input type="password" name="password" id="login-input-password"
                            onChange={(event) => setPassword(event.currentTarget.value)} />
                    </p>
                </div>
                <input type="submit" value="Submit" id="login-submit" />
            </form>
        </div>
    );
}