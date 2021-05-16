import React, { useState, useEffect } from 'react';
import './Poems.css';

export default function Poems(props){
    const [title1, setTitle1] = useState('A Killer');
    const [title2, setTitle2] = useState('Life');
    const [poem1, setPoem1] = useState(props.poem1);
    const [poem2, setPoem2] = useState(props.poem2);

    useEffect(() => {
        console.log("I have been mounted");
        document.getElementsByClassName("App")[0].style.backgroundSize = "contain";
        return function cleanUp(){
            document.getElementsByClassName("App")[0].style.backgroundSize = "cover";
        }
    });

    const returnPoem = (poem)=> {
        let displayedPoem = poem.map( (line,i) => {
            return <p key={i}>{line}</p>
        })
        return displayedPoem
    }
    return (
        <div className="Poems">
            <h3>{title1}</h3>
            <div>{returnPoem(props.poem1)}</div>
            <h3>{title2}</h3>
            <div>{returnPoem(props.poem2)}</div>
        </div>
    )
}

