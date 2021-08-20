import './profileSuggestions.css';

import {
  useEffect,
  useState,
} from 'react';

import lscache from 'lscache';

import { User } from '../../utils/helpers/types';
import ProfileDesc from '../profileDesc';

const ProfileSuggestions = () => {
    const [profileSugg, setProfileSugg] = useState([])
    useEffect(() => {
        setProfileSugg(lscache.get('profileSugg'))
    }, [])

    return (
        profileSugg?
        <div className="ggProfileSuggestions9305 flexbox">
            <h3>Suggestions for you</h3>
            <div className="ggProfileSuggInner9305 flexbox">
            {
                profileSugg.map((ele: User) =>{
                    return <ProfileDesc key={ele.id} user={ele} />
                })
            }
            </div>
        </div>
        :
        null
    )
}

export default ProfileSuggestions;
