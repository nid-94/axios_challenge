import { USER_FETCH } from "./../actions/actionType";
const initState = {
    users: [],
    error: [],
};

const reducer = (state = initState, { payload, type }) => {
    switch (type) {
        case USER_FETCH:
            return { ...state, users: payload };

        default:
            return state;
    }
};

export default reducer;
