
export default function AuthHeader({logged, signupBtn, loginBtn}) {

    return (
        <div id="header-auth-container">
            {logged ? 
                <button className="header-auth-button">Log Out</button>
            : <> 
                <button className="header-auth-button" onClick={signupBtn}>Sign Up</button> 
                <button className="header-auth-button" onClick={loginBtn}>Log in</button>
            </>}
        </div>
    );
}