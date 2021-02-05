import React from 'react'
import ErrorImage from '../Images/error-page-img.png';

export default function Error() {
    return (
        <div style={{textAlign:"center"}}>
            <h1>404, This page was not found!</h1>
            <img src={ErrorImage} alt='Error page'/>
        </div>
    )
}
