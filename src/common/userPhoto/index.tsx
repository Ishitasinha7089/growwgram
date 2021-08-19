import './userPhoto.css';

import React, { useState } from 'react';

import { ReactComponent as Heart } from '../../styles/icons/heart.svg';

export default function UserPhoto({src, likes} : { src: string | undefined, likes: number | undefined}) {
    const [hover, setHover] = useState(false)
    return (
        <div onMouseOver={() =>setHover(true)} onMouseLeave={() =>setHover(false)} className="ggProfileUserPhoto9305">
            <img className="ggUserPhoto9305" src={src} alt="userphoto"/>
            <div className={`ggUserPhotoOverlay9305 flexbox ${ hover? "ggShowOverlay9305" : ""}`}>
                <Heart viewBox="0 0 50 50" className="ggUserPhotoLikes9305" />
                <span>{likes}</span>
            </div>
        </div>
    )
}
