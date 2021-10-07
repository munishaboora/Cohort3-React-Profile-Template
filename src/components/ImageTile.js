import React from 'react'
import './ImageTile.css'


function ImageTile(props) {
    return (
        <div>
            <img className ="image-tile" src={props.image} alt="background"/>
        </div>
    )
}

export default ImageTile
