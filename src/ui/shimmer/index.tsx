import './shimmer.css';

import React from 'react';

type ShimmerProp = {
    height?: string,
    width: string,
    margin?: string
}
export const AvatarShimmer = () => {
    return (
        <div className="ggAvatarShimmer9305 animate">
            
        </div>
    )
}

export const TextShimmer = ({width, margin} : ShimmerProp) => {
    const style = {
        width: width,
        margin: margin
    }
    return (
        <div style={style} className="ggTextShimmer9305 animate">
            
        </div>
    )
}

export const ImageShimmer = ({height, width}: ShimmerProp) => {
    const style = {
        height: height,
        width: width
    }
    return (
        <div style={style} className="ggImageShimmer9305 animate">
            
        </div>
    )
}
