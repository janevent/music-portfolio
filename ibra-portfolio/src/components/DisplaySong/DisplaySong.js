import React from 'react';
import ReactPlayer from 'react-player'; 
import './DisplaySong.css'

export default class DisplaySong extends React.Component {
    constructor(props){
        super(props);
        const {title, url} = this.props.song
        this.state = {
            title: title,
            url
        }
    }

    render(){
        return(
            <div className='DisplaySong'>
                <h2 className="songTitle">{this.state.title}</h2>
                <div className="ReactPlayer"><ReactPlayer className="ReactPlayer" url={this.state.url} /></div>
            </div>
        )
    }
}