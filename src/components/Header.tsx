import React from 'react';
import SwitchTheme from './SwitchTheme';
import SwitchLanguage from './SwitchLanguage';

type HeaderProps = {
  theme: string;
  setTheme: (theme: string) => void;
  language:string;
  setLanguage:(language:string) => void;  
};

function Header(props: HeaderProps) {


  return (
    <>
    <SwitchTheme theme={props.theme} setTheme={props.setTheme}/>
    <SwitchLanguage language={props.language} setLanguage={props.setLanguage}  />
    </>
       
    
  );
}

export default Header;
