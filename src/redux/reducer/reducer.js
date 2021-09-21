import { USER_FETCH,POSTS_FETCH,COMMENTS_FETCH } from "./../actions/actionType";
const initState = {
    users: [],
    posts:[],
    comments:[],
    error: [],
};

const reducer = (state = initState, { payload, type }) => {
    switch (type) {
        case USER_FETCH:
            return { ...state, users: payload };
        case POSTS_FETCH:
            return { ...state, posts: payload };
        case COMMENTS_FETCH:
            return { ...state, comments: payload };

        default:
            return state;
    }
};

export default reducer;
