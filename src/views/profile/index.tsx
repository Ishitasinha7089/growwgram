import './profile.css';

import { useEffect } from 'react';

import { connect } from 'react-redux';
import { useLocation } from 'react-router';

import UserPhoto from '../../common/userPhoto';
import {
  getUser,
  getUserPhotos,
} from '../../store/actions/index';
import Avatar from '../../ui/avatar';
import {
  AvatarShimmer,
  ImageShimmer,
  TextShimmer,
} from '../../ui/shimmer';
import {
  Photo,
  ProfileUser,
  User,
} from '../../utils/helpers/types';

type Props = {
    getUser: (user: string) => Promise<void>,
    user: ProfileUser,
    getUserPhotos: (user: string) => Promise<void>,
    userPhotos: Array<Photo>
}

const Profile = ({getUser, user, getUserPhotos, userPhotos}: Props) => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
        getUser(location.pathname.replace("/", ""))
        getUserPhotos(location.pathname.replace("/", ""))
        
    },[location])

    const getProfilePhotoUI = (user: User) =>{
        return user.profile_image?
            <Avatar src={user.profile_image?.large} />
            :
            <AvatarShimmer />
    }

    const getUserPhotosUI = (userPhotos: Array<Photo>) =>{
            let shimmers = [];
            for (let i = 0; i < 9; i++) {
                shimmers.push(<ImageShimmer width="270px" height="270px" />)
                
            }
            return (
                <div className="ggProfileBody9305">
                    {userPhotos.length?
                     userPhotos.map((photo: Photo, indx) =>{
                            return <UserPhoto key={photo.id} src={photo?.urls?.small} likes={photo?.likes} />
                    }) 
                    :
                    shimmers
                    }
                </div>
            )
            
    }

    const getUserInfo = (user: ProfileUser) =>{
        const isData = user.username || user.bio || user.name || user.total_photos || user.followers_count || user.following_count
        return (
            isData?
            <div className="ggProfileUserInfo9305 flexbox">
                <span className="ggProfileUsername9305">{user.username}</span>
                <div className="ggProfileUserStats9305 flexbox">
                <div className="ggProfileUserStats9305 flexbox">
                    <span><b>{user.total_photos}</b> Photos</span>
                    <span><b>{user.followers_count}</b> Followers</span>
                    <span><b>{user.following_count}</b> Following</span>
                </div>
                </div>
                <span className="ggProfileName9305">{user.name}</span>
                <p className="ggProfileBio9305">{user.bio}</p>
            </div>
            :
            <div className="ggProfileUserInfo9305 flexbox">
                <TextShimmer width="300px" />
                <div className="ggProfileUserStats9305 flexbox">
                    <TextShimmer margin="0 0 16px 0" width="100px" />
                </div>
                <TextShimmer margin="0 0 16px 0" width="130px" />
                <TextShimmer margin="0 0 16px 0" width="150px" />
            </div>
            
        )
    }
    return ( 
        <div className="ggProfile9305 flexbox">
            <div className="ggProfileHeader9305 flexbox">
                <div className="ggProfileAvatar">
                   {getProfilePhotoUI(user)}
                </div>
                {getUserInfo(user)}
            </div>
            {getUserPhotosUI(userPhotos)}
        </div>
    )
}



const mapsStateToProps = (state: any) =>{
    // console.log(state);
    
    return { user: state.user, userPhotos: state.userPhotos }
}

export default connect(mapsStateToProps, { getUser, getUserPhotos })(Profile)

