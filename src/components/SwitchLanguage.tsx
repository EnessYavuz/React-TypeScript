import React from 'react'

type HeaderProps = {
  
    language:string;
    setLanguage:(language:string) => void;  
  };

function SwitchLanguage(props:HeaderProps) {
  return (
    <div>
    <p>language: {props.language}</p>
    <button onClick={()=>{props.setLanguage(props.language === "tr" ? "eng" : "tr")}}>toggle language</button>
    </div>
  )
}

export default SwitchLanguage
