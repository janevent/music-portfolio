import React from 'react';

export default class Music extends React.Component {
    constructor(){
        this.state = {
            play: false
        }
    }

    buttonOnClick = (event) => {
        this.setState((state)=>{
            return {
                play: !state.play
            }
        })
    }
    render(){
        return(
            <div>
                <p>Song </p><button onClick={this.buttonOnClick}></button>
            </div>
        )
    }
}