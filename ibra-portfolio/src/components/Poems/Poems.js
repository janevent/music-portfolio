import React, { useState} from 'react';
import 'Poems.css';

export default function Poems(props){
    const [title1, setTitle1] = useState('A Killer');
    const [title2, setTitle2] = useState('Life');
    const [poem1, setPoem1] = useState(props.poem1);
    const [poem2, setPoem2] = useState(props.poem2);

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

