import { useState } from 'react';

import './style/App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';
import LoginScreen from './features/LoginScreen.jsx';

function App() {
    const [isLogged, setIsLogged] = useState(false);

    

    return (
        <>
            <Header logged={isLogged}/>

            <LoginScreen/>
            <Content/>

            <Footer/>
        </>
    );
}

export default App;
