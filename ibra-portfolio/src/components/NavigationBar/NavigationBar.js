import './NavigationBar.css';
import React from 'react';
import { Link } from 'react-router-dom';


export default class NavigationBar extends React.Component {
    render(){
        return (
            <div className="NavigationBar">               
                    <Link to="/songs">Songs</Link>
                    <Link to="/">About</Link> 
                    <Link to="/poems">Poems</Link>               
            </div>
        )
    }
}