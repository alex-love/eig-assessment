import logo from './logo.svg';
import './App.css';
import { Link, Router } from "@reach/router"

import StepHome from './components/StepHome';
import StepSuccess from './components/StepSuccess';
import Contact from './components/Contact';
import UploadTips from './components/UploadTips';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" >
        <img src={logo} className="logo" alt="logo" />
        </Link>
      </header>
        <main className="wrapper">
          <Router primary={false}>
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
