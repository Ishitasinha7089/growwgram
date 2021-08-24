import { uniqBy } from 'lodash';
import lscache from 'lscache';

import unsplash from '../../utils/apis/unsplash';
import {
  Dispatch,
  Photo,
} from '../../utils/helpers/types';

const getUniqUsers = (response: Array<Photo>) =>{
    const users = response.map((ele: Photo) =>{
        return ele.user
    })
    const uniqUsers = uniqBy(users, 'username')
    lscache.set('profileSugg', uniqUsers)
    return uniqUsers
}

export const initialPosts = () =>{
    return async (dispatch: (arg: Dispatch) => void) =>{
        const cachedPosts = lscache.get('posts')
        let data;
        if(cachedPosts && cachedPosts.length){
            data = cachedPosts
        } else{
            const response = await unsplash.get(`photos/random?client_id=cf4CqhocVFJtgibeZ2bAf1tv0Yu9uA5KN16l62DRWyA&count=10`)
            lscache.set('posts', response.data)
            data = response.data
        }
        const uniqUsers = getUniqUsers(data)
        dispatch({ type: 'FETCH_POSTS', payload: data })
        dispatch({ type: 'PROFILE_SUGG', payload: uniqUsers })
    }
}

export const fetchPosts = () =>{
    return async (dispatch: (arg: Dispatch) => void) => {
        const response = await unsplash.get(`photos/random?client_id=cf4CqhocVFJtgibeZ2bAf1tv0Yu9uA5KN16l62DRWyA&count=10`)
        
        // console.log(usernames);
        console.log(response.data);
        
        dispatch({ type: 'FETCH_POSTS', payload: response.data })
    };
}
export const getUser = (username: string) =>{
    return async (dispatch: (arg: Dispatch) => void) => {
        
        const response = await unsplash.get(`users/${username}?client_id=cf4CqhocVFJtgibeZ2bAf1tv0Yu9uA5KN16l62DRWyA`)
        // console.log(username, "action", response.data);
        lscache.set('user', response.data)
        dispatch({ type: 'GET_USER', payload: response.data })
    };
}

export const getUserPhotos = (username: string) =>{
    return async (dispatch: (arg: Dispatch) => void) => {
        
        const response = await unsplash.get(`users/${username}/photos?client_id=cf4CqhocVFJtgibeZ2bAf1tv0Yu9uA5KN16l62DRWyA`)
        console.log(username, "action", response.data);
        lscache.set('userPhotos', response.data)
        dispatch({ type: 'GET_USER_PHOTOS', payload: response.data })
    };
}