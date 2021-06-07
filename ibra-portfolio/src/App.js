//import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile.js';
import SongsContainer from './components/SongsContainer/SongsContainer.js';
import Credit from './components/Credit/Credit.js';
import NavigationBar from './components/NavigationBar/NavigationBar.js';
import Poems from './components/Poems/Poems.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import autobio from'./texts/autobio.js';
import poem1 from './texts/poem1.js';
import poem2 from './texts/poem2.js';

class App extends React.Component {
  state = {
    profile : {
      name: "Afrik",
      autobio: autobio,
    },
    poem1: poem1,
    poem2: poem2
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
              <Route exact path="/poems" render={(props) => <Poems {...props} poem1={this.state.poem1} poem2={this.state.poem2}/>} />
            </Switch>
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

