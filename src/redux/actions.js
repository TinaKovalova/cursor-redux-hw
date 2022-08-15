import {ADD_POST, SET_ACTIVITY} from "./types";

export const addPost = (post) => {
    post.id = Date.now() + 1
    return {
        type: ADD_POST,
        payload: post
    }
}

export const setActivity = (post, activity) => {
    const activityTypes = {
        likes: 'whoLiked',
        reposts: 'whoReposted',
        comments: 'whoCommented'
    }
    const {id, statistic} = post;
    let activityStatistic = statistic[activityTypes[activity]]
    if (!activityStatistic.includes(1)) {
        post[activity]++;
        activityStatistic.push(1);
    } else {
        post[activity]--;
        activityStatistic = activityStatistic.filter(userId => userId != 1)
    }
    const resStatistic = {...post.statistic, [activityTypes[activity]]: activityStatistic}
    return {
        type: SET_ACTIVITY,
        payload: {
            [activity.toString()]: post[activity],
            statistic: {...resStatistic},
            activity,
            id
        }
    }
}


