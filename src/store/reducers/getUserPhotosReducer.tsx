const getUserPhotosReducer = (state = [], action: { type: string, payload: object}) =>{
    switch (action.type) {
        case 'GET_USER_PHOTOS':
            return action.payload;
        default:
            return state;
    }
}

export default getUserPhotosReducer;