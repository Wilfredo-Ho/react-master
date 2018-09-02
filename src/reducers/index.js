import { combineReducers } from 'redux';
import * as type from '../actions/type';

const setHeight = (state = {height: 100}, action) => {
    switch (action.type) {
        case type.SET_FULL_HEIGHT:
            return { ...state, height: action.height};
        default:
            return { ...state };
    }
}

export default combineReducers({
    setHeight
})