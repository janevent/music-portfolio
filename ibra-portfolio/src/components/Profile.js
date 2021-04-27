import React from 'react';
import '../styles/Profile.css';
import Credit from './Credit/Credit.js';


export default class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: props.profile.name,
            autobio: props.profile.autobio
        }
    }

    render(){
        return(
            <div className="Profile">
                <div className="profile-container">
                    <h1>About {this.state.name}</h1>
                    <div className="paragraphs">{this.state.autobio}</div>
                </div>
                <Credit/>
            </div>
        )
    }
}

