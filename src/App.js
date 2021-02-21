import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { Router } from "@reach/router"

import StepHome from './components/StepHome';
import StepSuccess from './components/StepSuccess';

function App() {
  const [step, updateStep] = useState(0);

  const APP_ROUTES = [
    { path: '/', component: <StepHome/> },
    { id: '/success', component: <StepSuccess/> },
    { id: '/contact', component: <StepSuccess/> },
    { id: '/tips', component: <StepSuccess/> }
  ];
  

  const [appState, setAppState] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
      </header>
        <main className="wrapper">
          <Router>
            <StepHome path="/" />
            <StepSuccess path="/success" />
          </Router>
        </main>
    </div>
  );
}

export default App;
