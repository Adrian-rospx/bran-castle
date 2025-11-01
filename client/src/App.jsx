import { useState } from 'react';

import './style/App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    

    return (
        <>
            <Header/>

            <Content/>

            <Footer/>
        </>
    );
}

export default App;
