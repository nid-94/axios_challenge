import axios from "axios";
import { USER_FETCH,POSTS_FETCH } from "./actionType";

export const getUsers = () => async (dispatch) => {

    try {
        let result = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        dispatch({
            type: USER_FETCH,
            payload: result.data,
        });
    } catch (error) {}
};
export const getPosts = (id) => async (dispatch) => {
    try {
        let result = await axios.get(
            ` https://jsonplaceholder.typicode.com/posts?userId=${id}`
        );

        dispatch({
            type: POSTS_FETCH,
            payload:result.data ,
        });
    } catch (error) {}
};
