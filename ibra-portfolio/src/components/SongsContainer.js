import React from 'react';
import DisplaySong from './DisplaySong';
import songs from '../songs';

export default class SongsContainer extends React.Component{
    state = {
        songs: [...songs]
    }

    mapSongs = () => {
        return this.state.songs.map((s) => {
            return <DisplaySong song={s} key={s.id} />
        })
    }

    render(){
        return (
            <div className='SongsContainer'>
                <h2>Artist</h2>
                <h2> Afrik Ntare</h2>
                <div>
                    {this.mapSongs()}
                </div>
            </div>
        )
    }
}