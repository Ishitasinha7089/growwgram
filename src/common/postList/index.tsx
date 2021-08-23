import './postList.css';

import React, { Component } from 'react';

import { uniq } from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import {
  fetchPosts,
  initialPosts,
} from '../../store/actions';
import { ReactComponent as Check } from '../../styles/icons/check-circle.svg';
import {
  AvatarShimmer,
  ImageShimmer,
  TextShimmer,
} from '../../ui/shimmer';
import { Photo } from '../../utils/helpers/types';
import Post from '../post';

type Props = {
    posts: Array<Photo>,
    fetchPosts: () => Promise<void>
    initialPosts: () => Promise<void>
}
type State = {
    posts: Array<Photo>,
    hasMore: boolean,
    error: String | null,
    rateLimitExceeded: boolean
}


class PostList extends Component<Props, State>{
    state: State = {
        posts: [],
        hasMore: true,
        error: null,
        rateLimitExceeded: false
    }
    componentDidMount() { 
        const { initialPosts } = this.props;
        initialPosts()
    }
    render() {
        const { hasMore, rateLimitExceeded} = this.state
        const posts= this.props.posts
        return (
            <div className="ggPostList9305 flexbox">
                { !posts.length?
                  this.getPostLoadingUI()
                :
                <InfiniteScroll
                pageStart={0}
                loadMore={this.loadMore}
                hasMore={hasMore}
                loader={
                    <div key="load" className="ggLoaderWrapper9305 flexbox">
                        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </div>
                }
                >
                    {uniq(posts).map((post: Photo, indx) =>{
                        const key = post.id? post.id+indx : "post"+indx
                        return <Post key={key} post= {post} />
                    })}
                </InfiniteScroll>
                }
                <div className={`ggRLExceeded9305 ${rateLimitExceeded? "ggShowACU9305" : null}`}>
                    <Check /><h2>YAY! You're All Caught Up!</h2>
                </div>
            </div>
        )
    }
    loadingUI = (indx: number) =>{
        return (
            <div key={indx} className="ggPost9305">
                <div className="ggPostHeader9305 flexbox">
                    <AvatarShimmer />
                    <TextShimmer width="100px" />
                </div>
                <ImageShimmer height="600px" width="600px" />
                <div className="ggPostFooter9305 flexbox">
                    <TextShimmer margin="0 0 12px 0" width="100px" />
                    <TextShimmer margin="0 0 12px 0" width="500px" />
                    <TextShimmer width="50px" />
                </div>
            </div>
        );
    }
    getPostLoadingUI = () =>{
        
        const shimmers = []
        for (let index = 0; index < 9; index++) {
            shimmers.push(this.loadingUI(index))
        }
        return shimmers;
    }
    loadMore = () =>{
        if(!this.state.rateLimitExceeded) {
            this.props.fetchPosts()
            .catch((err) =>{
                if(err.message.includes('403')){
                    this.setState({
                        rateLimitExceeded: true,
                        hasMore: false
                    })
                    return
                }
                this.setState({
                    error: err.message
                })
            })
        }
    }
}

const mapsStateToProps = (state: any) =>{
    return { posts: state.posts}
}

export default connect(mapsStateToProps, { fetchPosts, initialPosts })(PostList);
