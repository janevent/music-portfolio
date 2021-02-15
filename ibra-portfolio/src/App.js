//import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile.js';
import NavigationBar from './components/NavigationBar.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><h2>The Lion's Whiskers</h2></div>
       
      </header>
      <NavigationBar />
      <div className="main" >
      <BrowserRouter>
        <Switch>
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
      </div>

    </div>
  );
}

export default App;

{/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
