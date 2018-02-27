import { FETCH_USERS } from '../actions';

export default (state = [], action) => {
    console.log("actionType", action.type);
    switch(action.type) {
        case FETCH_USERS: 
            console.log("payload", action.payload.data);
            return action.payload.data;
        default: 
            return state;
    }
};