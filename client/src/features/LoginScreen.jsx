import "../style/Login.css";

export default function LoginScreen() {

    return (
        <div id="login-screen">
            <h3> Login Screen </h3>
            <div id="login-input-container">
                <p className="login-input">
                    Username: <br />
                    <input type="text" name="username" id="login-input-username" />
                </p>
                <p className="login-input">
                    Password: <br />
                    <input type="password" name="password" id="login-input-password" />
                </p>
            </div>
            <input type="submit" value="Submit" id="login-submit" />
        </div>
    );
}