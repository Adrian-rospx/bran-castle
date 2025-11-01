
export default function AuthHeader({logged}) {

    return (
        <div id="header-auth-container">
            {logged ? 
                <button className="header-auth-button">Log Out</button>
            : <> 
                <button className="header-auth-button">Sign Up</button> 
                <button className="header-auth-button">Log in</button>
            </>}
        </div>
    );
}