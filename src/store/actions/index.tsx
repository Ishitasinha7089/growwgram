import { AxiosResponse } from 'axios';
import { uniqBy } from 'lodash';
import lscache from 'lscache';

import unsplash from '../../utils/apis/unsplash';
import { Photo } from '../../utils/helpers/types';

export const fetchPosts = () =>{
    return async (dispatch: (arg0: { type: string; payload: object }) => void) => {
        const response = await unsplash.get(`photos/random?client_id=cf4CqhocVFJtgibeZ2bAf1tv0Yu9uA5KN16l62DRWyA&count=10`)
        const users = response.data.map((ele: Photo) =>{
            return ele.user
        })
        // console.log(usernames);
        const temp = uniqBy(users, 'username'); 
        lscache.set('posts', response.data)
        lscache.set('profileSugg', temp.slice(0,5))
        // console.log(response.data);
        
        dispatch({ type: 'FETCH_POSTS', payload: response.data })
        dispatch({ type: 'PROFILE_SUGG', payload: temp.slice(0,5) })
    };
};

export const getUser = (username: string) =>{
    return async (dispatch: (arg0: { type: string; payload: AxiosResponse<any>; }) => void) => {
        
        const response = await unsplash.get(`users/${username}?client_id=cf4CqhocVFJtgibeZ2bAf1tv0Yu9uA5KN16l62DRWyA`)
        // console.log(username, "action", response.data);
        lscache.set('user', response.data)
        dispatch({ type: 'GET_USER', payload: response.data })
    };
}

export const getUserPhotos = (username: string) =>{
    return async (dispatch: (arg0: { type: string; payload: AxiosResponse<any>; }) => void) => {
        
        const response = await unsplash.get(`users/${username}/photos?client_id=cf4CqhocVFJtgibeZ2bAf1tv0Yu9uA5KN16l62DRWyA`)
        console.log(username, "action", response.data);
        lscache.set('userPhotos', response.data)
        dispatch({ type: 'GET_USER_PHOTOS', payload: response.data })
    };
}