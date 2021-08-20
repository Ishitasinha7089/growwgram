import './postList.css';

import React, { Component } from 'react';

import lscache from 'lscache';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import {
  fetchPosts,
  fetchSinglePost,
} from '../../store/actions';
import {
  AvatarShimmer,
  ImageShimmer,
  TextShimmer,
} from '../../ui/shimmer';
import { Photo } from '../../utils/helpers/types';
import Post from '../post';

type Props = {
    posts: Array<Photo>,
    fetchPosts: () => Promise<void>,
    fetchSinglePost: () => Promise<void>,
    onePost: Array<Photo>
}
class PostList extends Component<Props> {
    state = {
        posts: [],
        hasMore: true,
        error: null,
    }
    componentDidMount() {
        const { posts, fetchPosts } = this.props
        if(lscache.get('posts')){
            this.setState({
                posts: lscache.get('posts')
            })
        }
        else{
            fetchPosts()
            .then(() =>{
                this.setState({
                    posts: posts
                })
            })
            .catch((err) =>{
                this.setState({
                    error: "Rate Limit Exceeded"+ err.message
                })
            })
            
        }
       
        console.log(this.state.posts, this.props.posts, lscache.get('posts'));
        
    }
    render() {
        const {posts, error}= this.state
        return (
            <div className="ggPostList9305 flexbox">
                {  
                   error?
                   this.getErrorUI()
                   :
                   (
                    posts.length && !error?
                    this.getInfiniteScrollUI()
                    :
                    this.getPostLoadingUI()
                   )
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
        console.log(this.props.onePost[0]);
        
        setTimeout(() => {
            this.props.fetchSinglePost()
            let temp: Array<Photo> = [...this.state.posts]
            // let temp2 = uniq(temp.push(this.props.onePost[0]))
            console.log(this.props.onePost[0], [...this.state.posts, this.props.onePost[0]]);
            
            this.setState({
                posts: temp
            })
            if(this.state.posts.length>=30){
                this.setState({
                    hasMore: false
                })
                return
            }
        }, 1000);
    }

    getInfiniteScrollUI  = () =>{
        const { posts, hasMore } = this.state
        return(
            <InfiniteScroll
            pageStart={0}
            loadMore={this.loadMore}
            hasMore={hasMore}
            loader={<h1>loading</h1>}
            >
                {
                    posts.map((post: Photo, indx) =>{
                        const key = post.id? post.id : "post"+indx
                        console.log(key);
                        
                        return <Post key={key} post= {post} />
                    })
                }
            </InfiniteScroll>
        );
    }

    getErrorUI = () =>{
        const {error} = this.state
        return (
            <div className="ggNoPost9305 flexbox">
                <h1>Oops, {error}. Try again after an hour</h1>
            </div>
        );
    }
    
}

const mapsStateToProps = (state: any) =>{
    return { posts: state.posts, onePost: state.onePost }
}

export default connect(mapsStateToProps, { fetchPosts, fetchSinglePost })(PostList)
