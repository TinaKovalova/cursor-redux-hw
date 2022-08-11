import {ADD_POST, ADD_LIKE, DEL_LIKE} from './types';

export const addPost = (post) => {
    post.id = Date.now() + 1
    post.data = Date.now();
    return {
        type: ADD_POST,
        payload: post
    }
}


export const addLike = (count) => ({
    type: ADD_LIKE,
    payload: count + 1
});

export const delLike = (count) => ({
    type: DEL_LIKE,
    payload: count - 1
});