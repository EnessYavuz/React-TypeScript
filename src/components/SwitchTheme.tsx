import React from 'react'
type HeaderProps = {
    theme: string;
    setTheme: (theme: string) => void;
    
  };

function SwitchTheme(props:HeaderProps) {
  return (
    <div>
    <p>Theme: {props.theme}</p>
    <button onClick={()=>props.setTheme(props.theme === 'white' ? 'black' : 'white')}>Toggle Theme</button>
      
    </div>
  )
}

export default SwitchTheme
