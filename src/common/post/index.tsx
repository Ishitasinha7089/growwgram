import './post.css';

import React from 'react';

import {
  Link,
  useHistory,
} from 'react-router-dom';

import { ReactComponent as Heart } from '../../styles/icons/heart.svg';
import { ReactComponent as Share } from '../../styles/icons/share.svg';
import Avatar from '../../ui/avatar';
import getTimeUploaded from '../../utils/helpers/getTimeUploaded';
import { Photo } from '../../utils/helpers/types';

export default function Post({post}: { post: Photo}){
    const postDesc = post.description ? post.description : post.alt_description
    const uploadedTimeStamp = getTimeUploaded(post?.created_at)
    const history = useHistory()
    const goToProfile = () =>{
        history.push(`{/${post?.user?.username}}`)
    }
    return (
        <div className="ggPost9305">
            <div className="ggPostHeader9305 flexbox">
                <Avatar onClick={goToProfile} src={post.user?.profile_image?.medium} />
                <Link to={`/${post.user?.username}`}>{post?.user?.username}</Link>
            </div>
            <img className="ggPostImage9305" src={post.urls?.regular} alt="asjkn" />
            <div className="ggPostFooter9305 flexbox">
                <div className="ggIcons9305 flexbox">
                    <Heart className="ggIconItem9305" />
                    <Share className="ggIconItem9305" />
                </div>
                <span className="ggPostLikes9305">{post.likes} likes</span>
                <p className="ggPostCaption9305"><Link to={`/${post.user?.username}`}>{post.user?.username} </Link>{postDesc}</p>
                <span className="ggPostTimeStamp9305">{uploadedTimeStamp}</span>
            </div>
        </div>
        
        
    )
}
