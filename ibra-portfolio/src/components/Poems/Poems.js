import React, { useState} from 'react';


export default function Poems(props){
    const [title1, setTitle1] = useState("A Killer");
    const [title2, setTitle2] = useState("Life");
    const [poem1, setPoem1] = useState(props.poem1);
    const [poem2, setPoem2] = useState(props.poem2);

    const returnPoem = (poem)=> {
        let displayedPoem = poem.map(line => {
            return <p>{line}</p>
        })
        return <div>{displayedPoem}</div>
    }
    return (
        <div className="Poems">
            {}
        </div>
    )
}

