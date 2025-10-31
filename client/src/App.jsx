import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <h1>Bran Castle Blog</h1>
    </>
  );
}

export default App;
