import React from 'react';
import '../styles/Profile.css';
import ntare from '../texts/profile.js';

export default class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
            name: ntare.name,
            par1: ntare.autobio
        }
    }

    render(){
        return(
            <div className="Profile">
                <h3>{this.state.name}</h3>
                <div className="paragraphs">{this.state.par1}</div>
            </div>
        )
    }
}