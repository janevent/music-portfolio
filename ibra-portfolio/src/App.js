//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile.js';
import SongsContainer from './components/SongsContainer/SongsContainer.js';
import NavigationBar from './components/NavigationBar/NavigationBar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import autobio from'./texts/autobio.js';

class App extends React.Component {
  state = {
    profile : {
      name: "Afrik",
      autobio: autobio
    }
  }

  render (){
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div><h2 className='header-title'>The Lion's Whiskers</h2></div>          
          </header>
          <NavigationBar />
          <div className="main" >         
            <Switch>
              <Route exact path="/" render={(props) => <Profile {...props} profile={this.state.profile}/>} />
              <Route exact path="/songs" component={SongsContainer} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

