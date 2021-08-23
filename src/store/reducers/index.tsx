import { combineReducers } from 'redux';

import getUserPhotosReducer from './getUserPhotosReducer';
import getUserReducer from './getUserReducer';
import postsReducer from './postsReducer';
import profileSugReducer from './profileSugReducer';

export default combineReducers({
    // replaceMe: () => 1518 dummy reducer
    posts: postsReducer,
    profileSugg: profileSugReducer,
    user: getUserReducer,
    userPhotos: getUserPhotosReducer
})