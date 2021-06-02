import './App.css';
import React from 'react';
// import {css_logo.png, html_logo.png, react_logo.png} from './images';
function App() {
  return (
    <div className="App">
      
      <div className="form-container">
        <h1>SUBSCRIBE</h1>
        <h4>Sign Up with your email address to recieve news and updates.</h4>
        <input type="text" placeholder='First Name' />
        <input type="text"placeholder='Last Name' />
        <input type="text"placeholder='Email' />
        <br />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default App;
