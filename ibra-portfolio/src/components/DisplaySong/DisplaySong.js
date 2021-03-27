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
                <ReactPlayer url={this.state.url} />
            </div>
        )
    }
}