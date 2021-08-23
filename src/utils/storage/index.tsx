import lscache from 'lscache';

import { Photo } from '../helpers/types';

export const fetchData = (fetch: () => Promise<void>, posts: Array<Photo>) =>{
    const expiryMilliseconds = 1000;  //time units is seconds
    lscache.setExpiryMilliseconds(expiryMilliseconds);
    // var key = 'thekey';
    const numExpiryUnits = 7200; // expire after two seconds
    setTimeout(() => {
        fetch()
        console.log(posts, "storaage posts");
        lscache.set('posts', posts)
        alert('data')
    }, expiryMilliseconds*numExpiryUnits + 1);
}