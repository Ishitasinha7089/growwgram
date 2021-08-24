import './modal.css';

import React, { useState } from 'react';

import { ReactComponent as Heart } from '../../styles/icons/heart.svg';
import { ReactComponent as Share } from '../../styles/icons/share.svg';
import { Photo } from '../../utils/helpers/types';
import ProfileDesc from '../profileDesc';

export default function Modal({photo, openModal, setOpenModal}: {photo: Photo, openModal: boolean, setOpenModal:any}) {
    const [likes, setLikes] = useState(photo?.likes? photo.likes : 0)

    const likePost = (e: any) =>{
        e.stopPropagation()
        e.target.classList.toggle('ggLikePost9305')
        if(e.target.classList.contains('ggLikePost9305')){
            setLikes(likes+1)
            return
        }
        setLikes(likes-1)
    }
    const style = openModal ? {display:"flex"} : {display:"none"}
    return (
        
        <div onClick={() =>setOpenModal(false)} style={style} className="ggModal9305">
           { photo.urls? 
            <div className="ggModalInner9305 flexbox">
                <img className="ggModalImg9305" src={photo.urls?.full} alt="modalimage" />
                <div className="ggModalInfo9305 flexbox">
                    <div className="ggModalInfoHead9305">
                        <ProfileDesc src={photo.user?.profile_image?.medium} username={photo.user?.username} title={undefined} />
                    </div>
                    <div className="ggModalComments9305 flexbox">
                        <span>{photo.description}</span>
                        <i>No comments</i>
                    </div>
                    <div className="ggModalInfoLikes9305 flexbox">
                        <div className="ggIcons9305 flexbox">
                            <Heart onClick={likePost} className="ggIconItem9305 heart" />
                            <Share className="ggIconItem9305" />
                        </div>
                        <span>{likes} Like{likes >1?  "s" : ""}</span>
                    </div>
                </div>
            </div>
            :
            <h1>loacsdding</h1>}
        </div>
    )
}
