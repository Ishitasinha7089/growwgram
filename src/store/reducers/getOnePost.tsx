const getOnePostReducer = (state = [], action: { type: string, payload: object}) =>{
    switch (action.type) {
        case 'GET_ONE_POST':
            return action.payload;
        default:
            return state;
    }
}

export default getOnePostReducer;