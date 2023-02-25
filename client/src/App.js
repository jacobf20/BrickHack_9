import logo from './RunningThoughts.PNG';
import './App.css';
import * as React from 'react';
import LoginPage from './Pages/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginPage></LoginPage>
      </header>
    </div>
  );
}

export default App;
