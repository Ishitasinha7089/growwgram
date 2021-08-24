import './profile.css';

import {
  useEffect,
  useState,
} from 'react';

import { connect } from 'react-redux';
import { useLocation } from 'react-router';

import Modal from '../../common/modal';
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
    const [error, setError] = useState(null)
    // const [user, setUser] = useState<ProfileUser>({})
    // const [userPhotos, setUserPhotos] = useState<Array<Photo>>([])
    const [openModal, setOpenModal] = useState(false)
    const [selectedPhoto, setSelectedPhoto] = useState<Photo>({})

    useEffect(() => {
        window.scrollTo(0,0)
        // if(lscache.get('user')){
        //     setUser(lscache.get('user'))
        // } else{
        //     getUser(location.pathname.replace("/", ""))
        //     .catch((err) =>{
        //         setError(err.message)
        //     })
        //     setUser(userData)
        // }
        // if(lscache.get('userPhotos')){
        //     setUserPhotos(lscache.get('userPhotos'))
        // } else{
        //     getUserPhotos(location.pathname.replace("/", ""))
        //     setUserPhotos(userPhotosData)
        // }
        getUser(location.pathname.replace("/profile/", ""))
        .catch((err) =>{
            setError(err.message)
        })
        getUserPhotos(location.pathname.replace("/profile/", ""))
        console.log(location, userPhotos);
        
    },[location])

    const getProfilePhotoUI = (user: User) =>{
        return user.profile_image?
            <Avatar src={user.profile_image?.large} />
            :
            <AvatarShimmer />
    }

    const getUserPhotosUI = (userPhotos: Array<Photo>) =>{
            let shimmers = [];
            for (let i = 0; i < 3; i++) {
                shimmers.push(<ImageShimmer key={i} width="270px" height="270px" />)
            }
            return (
                <div className="ggProfileBody9305">
                    {
                    userPhotos.map((photo: Photo, indx) =>{
                        return <UserPhoto photo={photo} setSelectedPhoto= {setSelectedPhoto} setOpenModal = {setOpenModal} />
                    })
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
                    <div className="ggProfileUserStItem9305 flexbox">
                        <b>{user.total_photos}</b><span> Photos</span>
                    </div>
                    <div className="ggProfileUserStItem9305 flexbox">
                        <b>{user.followers_count}</b><span> Followers</span>
                    </div>
                    <div className="ggProfileUserStItem9305 flexbox">
                        <b>{user.following_count}</b><span> Following</span>
                    </div>
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
    const  getErrorUI = () =>{
        return (
            <div className="ggNoUser9305 flexbox">
                <h1>Oops, {error}. Try again after an hour</h1>
            </div>
        );
    }
    return ( 
        <div className="ggProfile9305 flexbox">
            <div className="ggProfileHeader9305 flexbox">
                <div className="ggProfileAvatar">
                   {getProfilePhotoUI(user)}
                </div>
                {getUserInfo(user)}
            </div>
            {/* {getUserPhotosUI(userPhotos)} */}
            <div className="ggProfileBody9305 flexbox">
            {
                 userPhotos.map((photo: Photo, indx) =>{
                     const key = (photo.id? photo.id : "") + indx
                    return <UserPhoto key={key} photo={photo} setSelectedPhoto= {setSelectedPhoto} setOpenModal = {setOpenModal} />
                 })
                
            }
            </div>
            <Modal setOpenModal={setOpenModal} openModal={openModal} photo={selectedPhoto} />
        </div>
     
        // getErrorUI()
    )
}



const mapsStateToProps = (state: any) =>{
    // console.log(state);
    
    return { user: state.user, userPhotos: state.userPhotos }
}

export default connect(mapsStateToProps, { getUser, getUserPhotos })(Profile)

