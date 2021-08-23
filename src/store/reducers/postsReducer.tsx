import { Photo } from '../../utils/helpers/types';

const postsReducer = (state: Array<Photo> = [], action: { type: string, payload: Array<object>}) =>{
    switch (action.type) {
        case 'FETCH_POSTS':
            const newPosts = action.payload
            console.log([...state, ...newPosts], "reducer");
            return [...state, ...newPosts];
        default:
            return state
    }
}

export default postsReducer;