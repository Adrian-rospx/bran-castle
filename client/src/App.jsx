import { useState } from 'react';

import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';

function App() {

    return (
        <>
            <Header/>

            <Content/>

            <Footer/>
        </>
    );
}

export default App;
