import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {

    return (
        <>
            <Header/>

            <main>
                <h1>Bran Castle Blog</h1>
            </main>

            <Footer/>
        </>
    );
}

export default App;
