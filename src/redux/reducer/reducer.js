import { USER_FETCH,POSTS_FETCH } from "./../actions/actionType";
const initState = {
    users: [],
    posts:[],
    error: [],
};

const reducer = (state = initState, { payload, type }) => {
    switch (type) {
        case USER_FETCH:
            return { ...state, users: payload };
        case POSTS_FETCH:
            return { ...state, posts: payload };

        default:
            return state;
    }
};

export default reducer;
