import './postList.css';

import React, { Component } from 'react';

import lscache from 'lscache';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import { fetchPosts } from '../../store/actions';
import {
  AvatarShimmer,
  ImageShimmer,
  TextShimmer,
} from '../../ui/shimmer';
import { Photo } from '../../utils/helpers/types';
import { fetchData } from '../../utils/storage';
import Post from '../post';

type Props = {
    posts: Array<Photo>,
    fetchPosts: () => Promise<void>
}
class PostList extends Component<Props> {
    state = {
        posts: []
    }
    componentDidMount() {
        const { posts, fetchPosts } = this.props
        this.setState({
            posts: lscache.get('posts')? lscache.get('posts'): posts
        })
        
        fetchData(fetchPosts)
    }
    render() {
        const { posts } = this.state;
        return (
            <div className="ggPostList9305 flexbox">
                { posts.length?
                this.getInfiniteScrollUI()
                :
                this.getPostLoadingUI()
                }
            </div>
        );
    }
    
    getPostLoadingUI = () =>{
        const loadingUI = (
            <div className="ggPost9305">
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
        )
        const shimmers = []
        for (let index = 0; index < 9; index++) {
            shimmers.push(loadingUI)
        }
        return shimmers;
    }

    loadMore = () =>{
        this.props.fetchPosts()
        let temp: Array<Photo> = [...this.state.posts]
        let temp2 = temp.concat(this.props.posts)
        setTimeout(() => {
            this.setState({
                posts: temp2
            })
            // console.log("newijiasdjk", temp2);
        }, 4000);
    }

    getInfiniteScrollUI  = () =>{
        const { posts } = this.state
        return(
            <InfiniteScroll
            pageStart={0}
            loadMore={this.loadMore}
            hasMore={true}
            loader={<h1>loading</h1>}
            >
                {
                    posts.map((post: Photo) =>{
                        return <Post key={post.id} post= {post} />
                    })
                }
            </InfiniteScroll>
        );
    }
    
}

const mapsStateToProps = (state: any) =>{
    return { posts: state.posts }
}

export default connect(mapsStateToProps, { fetchPosts })(PostList)
