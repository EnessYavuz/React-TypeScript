import React from 'react'

type HeaderProps = {
    theme: string;
    setTheme: (theme: string) => void;
    language:string;
    setLanguage: (language:string) =>void;
  };

function Footer(props:HeaderProps) {
  return (
    <div>
    
    <p>Theme: {props.theme}</p>
    <button onClick={()=>props.setTheme(props.theme === 'white' ? 'black' : 'white')}>Toggle Theme</button>
    <p>language: {props.language}</p>
    <button onClick={()=>{props.setLanguage(props.language === "tr" ? "eng" : "tr")}}>toggle language</button>
    
    </div>
  )
}

export default Footer
