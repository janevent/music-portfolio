import '../styles/NavigationBar.css';
import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import Home from './Home';

export default class NavigationBar extends React.Component {
    render(){
        return (
            <div className="NavigationBar">
                
                    <Link to="/profile">Profile</Link>
                    <Link to="/songs">Songs</Link>
                    <Link to="/">Home</Link>
                
            </div>
        )
    }
}