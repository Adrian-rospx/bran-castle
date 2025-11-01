import AuthHeader from "../features/AuthHeader.jsx"

export default function Header({logged, signupBtn, loginBtn}) {
    return(
    <>
        <header>
            <div id="header-container">
                <div id="header-balancer"></div>

                <div id="header-main-title">
                    <h1>Bran Castle</h1>
                </div>

                <AuthHeader logged={logged} signupBtn={signupBtn} loginBtn={loginBtn}/>
            </div>
        </header>
    </>
    );
}