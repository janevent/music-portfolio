import React from 'react';

export default class Profile extends React.Component{
    constructor(){
        super(props)
        this.state = {
            name: 'Ibrahim Ntare',
            par1: ''
        }
    }

    render(){
        return(
            <div className={Profile}>
                <h3>{this.state.name}</h3>
                <div className="paragraphs">{this.state.par1}</div>
            </div>
        )
    }
}