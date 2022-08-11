import {ADD_POST, ADD_LIKE, DEL_LIKE} from './types';
import {posts, authors} from '../constants';

const initialState = {
    posts,
    authors
};


export function postReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST :
            return {...state, posts: [...state.posts, action.payload]};
        case ADD_LIKE :
            return;
        case DEL_LIKE :
            return;
        default:
            return state;
    }
}