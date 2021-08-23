import './userPhoto.css';

import React, { useState } from 'react';

import notFound from '../../styles/icons/404-page-not-found.svg';
import { ReactComponent as Heart } from '../../styles/icons/heart.svg';
import { ImageShimmer } from '../../ui/shimmer';

export default function UserPhoto({src, likes} : { src: string | undefined, likes: number | undefined}) {
    const [hover, setHover] = useState(false)
    const displayAltImg = (e: any) =>{
        e.target.src = notFound
    }
    return (
         src && likes!==undefined?
        <div onMouseOver={() =>setHover(true)} onMouseLeave={() =>setHover(false)} className="ggProfileUserPhoto9305">
            <img className="ggUserPhoto9305" src={src} alt="userphoto" onError={displayAltImg} />
            <div className={`ggUserPhotoOverlay9305 flexbox ${ hover? "ggShowOverlay9305" : ""}`}>
                <Heart viewBox="0 0 50 50" className="ggUserPhotoLikes9305" />
                <span>{likes}</span>
            </div>
        </div>
        :
        <ImageShimmer width="270px" height="270px" />
    )
}
