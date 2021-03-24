import React from 'react';

export default class SongsContainer extends React.Component{
    state = {
        songs: []
    }

    mapSongs = () => {
        return this.state.songs.map((s) => {
            return <DisplaySong song={s}/>
        })
    }

    render(){
        return (
            <div className='SongsContainer'>
                <h2>Artist: Afrik Ntare</h2>
                <div>
                    {this.mapSongs()}
                </div>
            </div>
        )
    }
}