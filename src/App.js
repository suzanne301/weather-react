import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">
        </header> 
        <Weather defaultCity="Edinburgh" />
        <footer>
            This project was coded by {" "}
            <a 
            href="https://www.linkedin.com/in/suzanne-paterson-778b492b9/" 
            target="_blank" 
            rel="noreferrer"
            > 
            Suzanne Paterson 
            </a> {""} 
            and is {" "}
            <a 
            href="https://github.com/suzanne301/weather-react" target="_blank" 
            rel="noreferrer"
            >
             open-sourced on GitHub 
            </a>
        </footer>
      </div>
    </div>
  );
}
