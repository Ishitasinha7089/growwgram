import './newsFeed.css';
import 'lscache';

import { Component } from 'react';

import PostList from '../../common/postList';
import ProfileSuggestions from '../../common/profileSuggestions';

export default class NewsFeed extends Component{
    
    render() {
        return (
            <div className="ggNewsFeed9305 flexbox">
                <PostList />
                <ProfileSuggestions />
            </div>
        )
    }
}




