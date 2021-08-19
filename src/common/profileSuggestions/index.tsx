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
        <div className="ggProfileSuggestions9305 flexbox">
            <h3>Suggestions for you</h3>
            {
                profileSugg.map((ele: User) =>{
                    return <ProfileDesc key={ele.id} user={ele} />
                })
            }
        </div>
    )
}

export default ProfileSuggestions;
