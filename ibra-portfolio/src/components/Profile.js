import React from 'react';
import '../styles/Profile.css';


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
                <h3>{this.state.name}</h3>
                <div className="paragraphs">{this.state.autobio}</div>
            </div>
        )
    }
}

