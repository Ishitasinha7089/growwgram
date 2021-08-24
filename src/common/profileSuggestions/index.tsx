import './profileSuggestions.css';

import { connect } from 'react-redux';

import { fetchPosts } from '../../store/actions';
import {
  AvatarShimmer,
  TextShimmer,
} from '../../ui/shimmer';
import shuffleArray from '../../utils/helpers/shuffleArray';
import { User } from '../../utils/helpers/types';
import ProfileDesc from '../profileDesc';

type Props = {
    profileSugg: Array<User>
}


const ProfileSuggestions = ({ profileSugg } : Props) => {

    const shuffSugg = profileSugg.length ? shuffleArray(profileSugg) : []
    
    return (
        <div className="ggProfileSuggestions9305 flexbox">
            <h3>Suggestions for you</h3>
            <div className="ggProfileSuggInner9305 flexbox">
            { shuffSugg?
                shuffSugg.map((ele: User) =>{
                    return <ProfileDesc key={ele.id} src={ele.profile_image?.medium} title={ele.name} username={ele.username} />
                })

                :
                <div className="ggProfileDesc9305 flexbox">
                    <AvatarShimmer />
                    <div className="ggProfileDescName9305">
                        <TextShimmer margin="0 0 12px 0" width="70px" />
                        <TextShimmer width="90px" />
                    </div>
                </div>
            }
            </div>
        </div>
    )
}

const mapsStateToProps = (state: any) =>{
    return { profileSugg: state.profileSugg}
}


export default connect(mapsStateToProps, { fetchPosts })(ProfileSuggestions)
