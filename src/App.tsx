import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
 
  const [theme, setTheme] = useState('white');
  const [language, setLanguage] = useState("tr")
 
  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} />
      <br />
      <hr />
      <br />
      <Footer theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage}/>
      
      
    </div>
  );
}

export default App;
