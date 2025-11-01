import Auth from "../features/Auth.jsx"

export default function Header() {
    return(
    <>
        <header>
            <div id="header-container">
                <div id="header-balancer"></div>

                <div id="header-main-title">
                    <h1>Bran Castle</h1>
                </div>

                <Auth/>
            </div>
        </header>
    </>
    );
}