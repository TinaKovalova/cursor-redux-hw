import {ADD_POST, SET_ACTIVITY} from './types';
import {posts, authors} from '../constants';
const _ = require('lodash');

const initialState = {
    posts,
    authors
};


export function postReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST :
            return {...state, posts: [...state.posts, action.payload]};
        case SET_ACTIVITY: {
            const posts =_.cloneDeep(state.posts);
            const postIndex = state.posts.findIndex(post => post.id == action.payload.id)
            const post = posts[postIndex];

            const {activity ,statistic}=action.payload.activity;
            post.statistic={...post.statistic, ...statistic};
            post[activity]=action.payload[activity];

            return {...state, posts: _.cloneDeep(posts)};
        }

        default:
            return state;
    }
}