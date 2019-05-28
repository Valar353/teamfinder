//РЕДЬЮСЕР
import {initialState} from './Store';
import {INIT_USER} from "./constant";

function userReducer(state = initialState, action) {

    switch (action.type) {
        case INIT_USER:
            return {...state, user: action.user};
        default:
            return state;
    }
}
export default userReducer;