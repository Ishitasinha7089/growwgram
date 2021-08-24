import './profileDesc.css';

import React from 'react';

import { useHistory } from 'react-router';

import Avatar from '../../ui/avatar';

type Props = {
    src: string | undefined,
    username: string | undefined,
    title: string | undefined
}
export default function ProfileDesc({src, username, title} : Props) {
    const history = useHistory()
    const goToProfile = () =>{
        history.push(`/profile/${username}`)
    }
    return (
        <div className="ggProfileDesc9305 flexbox">
            <Avatar onClick={goToProfile} src={src} />
            <div className="ggProfileDescName9305 flexbox">
                <span onClick={goToProfile}>{username}</span>
                <span>{title}</span>
            </div>
        </div>
        
    )
}
