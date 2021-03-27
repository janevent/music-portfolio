import './NavigationBar.css';
import React from 'react';
import { Link } from 'react-router-dom';


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