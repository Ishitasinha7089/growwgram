import './post.css';

import React, {
  SyntheticEvent,
  useState,
} from 'react';

import {
  Link,
  useHistory,
} from 'react-router-dom';

import { ReactComponent as Heart } from '../../styles/icons/heart.svg';
import { ReactComponent as Share } from '../../styles/icons/share.svg';
import getTimeUploaded from '../../utils/helpers/getTimeUploaded';
import trimDesc from '../../utils/helpers/trimDesc';
import { Photo } from '../../utils/helpers/types';
import ProfileDesc from '../profileDesc';

export default function Post({post}: { post: Photo}){
    const postDesc = post.description ? trimDesc(post.description) : post.alt_description
    const uploadedTimeStamp = getTimeUploaded(post?.created_at)
    const profileUrl = `/${post?.user?.username}`
    const history = useHistory()
    const [likes, setLikes] = useState(post?.likes? post.likes : 0)
    const goToProfile = () =>{
        history.push(profileUrl)
    }
    
    const isDescLong = post.description ? (post.description.length>300) : null;

    const likePost = (e: any) =>{
        e.target.classList.toggle('ggLikePost9305')
        if(e.target.classList.contains('ggLikePost9305')){
            setLikes(likes+1)
            return
        }
        setLikes(likes-1)
    }
    const showFullDesc = (e: SyntheticEvent) =>{
        console.log(e.target);
        

    }
    const location = post?.location?.name? post.location.name : "Somewhere on earth"
    return (
        <div className="ggPost9305">
            <div className="ggPostHeader9305 flexbox">
                <ProfileDesc src={post.user?.profile_image?.medium} title={"📍 "+location} username={post.user?.username} />
            </div>
            <img className="ggPostImage9305" src={post.urls?.regular} alt="asjkn" />
            <div className="ggPostFooter9305 flexbox">
                <div className="ggIcons9305 flexbox">
                    <Heart onClick={likePost} className="ggIconItem9305 heart" />
                    <Share className="ggIconItem9305" />
                </div>
                <span className="ggPostLikes9305">{likes} likes</span>
                <p className="ggPostCaption9305">
                    <Link to={profileUrl}>{post.user?.username} </Link>
                    {postDesc}
                    <span onClick={showFullDesc} className={`ggPostShowMore9305 ${isDescLong? "ggPostSMVisible9305": null}`}>Show more</span>
                </p>
                <span className="ggPostTimeStamp9305">{uploadedTimeStamp}</span>
            </div>
        </div>
        
        
    )
}
