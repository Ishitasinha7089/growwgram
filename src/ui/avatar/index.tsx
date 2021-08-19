import './avatar.css';

import React from 'react';

export default function Avatar({src, onClick} : {src: string | undefined, onClick?: () => void}) {
    return (
        <img onClick={onClick} className="ggAvatar9305" src={src} alt="user"/>
    )
}
