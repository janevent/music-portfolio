import React, { useState } from 'react';
import './Credit.css';

export default function Credit(){
    const [name, setName] = useState('Nashad Abdu')
    return(
        <div className="Credit">Background Photo by {name} on Unsplash
        </div>
    )
}

