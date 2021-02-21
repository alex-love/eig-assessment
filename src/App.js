import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { Link, Router } from "@reach/router"

import StepHome from './components/StepHome';
import StepSuccess from './components/StepSuccess';
import Footer from './components/Footer';
import Contact from './components/Contact';
import UploadButton from './components/UploadButton';
import UploadTips from './components/UploadTips';
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
        <Link to="/" >
        <img src={logo} className="logo" alt="logo" />
        </Link>
      </header>
        <main className="wrapper">
          <Router>
            <StepHome path="/" />
            <StepSuccess path="/success" />
            <Contact path ="/contact" />
            <UploadTips path="/upload-tips" />
          </Router>
        </main>
    </div>
  );
}

export default App;
