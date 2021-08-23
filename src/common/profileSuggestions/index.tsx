import './profileSuggestions.css';

import { connect } from 'react-redux';

import { fetchPosts } from '../../store/actions';
import { User } from '../../utils/helpers/types';
import ProfileDesc from '../profileDesc';

type Props = {
    profileSugg: Array<User>
}


const ProfileSuggestions = ({ profileSugg } : Props) => {
    
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

const mapsStateToProps = (state: any) =>{
    return { profileSugg: state.profileSugg}
}


export default connect(mapsStateToProps, { fetchPosts })(ProfileSuggestions)
