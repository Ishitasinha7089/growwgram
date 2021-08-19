import './newsFeed.css';
import 'lscache';

import React, { Component } from 'react';

import PostList from '../../common/postList';
import ProfileSuggestions from '../../common/profileSuggestions';
import { Photo } from '../../utils/helpers/types';

type Props = {
    fetchPosts: () => Promise<void>,
    posts: Array<Photo>
}

export default class NewsFeed extends Component<Props>{
    render() {
        return (
            <div className="ggNewsFeed9305 flexbox">
                <PostList />
                <ProfileSuggestions />
            </div>
        )
    }
}


