import React, { useState, useEffect } from 'react'

export default function DataBlock(props) {

    const [data, setData] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/bay/getdata/5e29c87a48c7f73d523c0620')
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    });

    return (
        <div className="data-container">
            <h1>HI</h1>
            <h1>DASHBOARD</h1>
        </div>
    )
}
