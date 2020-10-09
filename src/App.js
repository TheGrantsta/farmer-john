import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xss-12">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome Farmer John!</h1>
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;
