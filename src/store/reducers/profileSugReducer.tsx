const profileSugReducer = (state = [], action: { type: string, payload: object}) =>{
    switch (action.type) {
        case 'PROFILE_SUGG':
            // console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default profileSugReducer;