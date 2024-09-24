import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Treasure from './treasure';
import Unsubscribe from './unsubscribe.jsx';

// Home Component
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
    </div>
  );
}

// About Component
function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>Learn more about us on this page.</p>
    </div>
  );
}
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/heaven" element={<Treasure />} />
      <Route path="/unsubscribe" element={<Unsubscribe />} />
      <Route path="/" element={
        <div className="App">
          <header className="App-header">
            <img src={logo} width={200} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <nav>
              <Link className="App-link" to="/">Home</Link>
              {' | '}
              <Link className="App-link" to="/about">About</Link>
            </nav>
          </header>

        </div> } />
      </Routes>
    </Router>
  );

}
export default App;
