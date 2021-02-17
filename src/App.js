import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

import StepHome from './components/StepHome';

function App() {

  const APP_STATE = [
    { id: 0, value: "home" },
    { id: 1, value: "uploaded" },
    { id: 2, value: "contact" },
    { id: 3, value: "tips" }
  ];

  const [appState, setAppState] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <main className="wrapper">
        <StepHome />
      </main>
    </div>
  );
}

export default App;
