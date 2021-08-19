const postsReducer = (state = [], action: { type: string, payload: object}) =>{
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
}

export default postsReducer;