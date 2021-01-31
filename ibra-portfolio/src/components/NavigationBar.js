import '../styles/NavigationBar.css';
import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

export default class NavigationBar extends React.Component {
    render(){
        return (
            <div className="NavigationBar">
                <BrowserRouter><Link to="/Profile">Profile</Link></BrowserRouter>
            </div>
        )
    }
}