import {createStore} from "redux";
import userReducer from "./reducer";
const initialState = {
    user: {
        isGuest: true
    },
    chat: {
        myMessage: ''
    },

};
//ХРАНИЛИЩЕ
let store = createStore(userReducer);
export {store, initialState};