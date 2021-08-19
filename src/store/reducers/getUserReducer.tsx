const getUserReducer = (state = [], action: { type: string, payload: object}) =>{
    switch (action.type) {
        case 'GET_USER':
            return action.payload;
        default:
            return state;
    }
}

export default getUserReducer;