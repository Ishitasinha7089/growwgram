import './profileDesc.css';

import React from 'react';

import { useHistory } from 'react-router';

import Avatar from '../../ui/avatar';
import {
  AvatarShimmer,
  TextShimmer,
} from '../../ui/shimmer';
import { User } from '../../utils/helpers/types';

export default function ProfileDesc({user} :{user: User}) {
    const history = useHistory()
    const goToProfile = () =>{
        history.push(`/${user.username}`)
    }
    return (
        user?
        <div className="ggProfileDesc9305 flexbox">
            <Avatar onClick={goToProfile} src={user?.profile_image?.medium} />
            <div className="ggProfileDescName9305 flexbox">
                <span onClick={goToProfile}>{user.username}</span>
                <span>{user.name}</span>
            </div>
        </div>
        :
        <div className="ggProfileDesc9305 flexbox">
            <AvatarShimmer />
            <div className="ggProfileDescName9305">
                <TextShimmer margin="0 0 12px 0" width="70px" />
                <TextShimmer width="90px" />
            </div>
        </div>
    )
}
