import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
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
            </a>, {""}is open-sourced on {" "}
            <a 
            href="https://github.com/suzanne301/weather-react" target="_blank" 
            rel="noreferrer"
            >
            GitHub 
            </a>
            {" "}and hosted on 
            <a href='https://weather-react-suzanne.netlify.app/'> Netlify</a>.
        </footer>
      </div>
    </div>
  );
}
