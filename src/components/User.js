import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./../redux/actions/actions";

const User = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    useEffect(() => dispatch(getUsers()), []);
    return (
        <div>
            hello
            {users.map((el) => (
                <h1>{el.name} </h1>
            ))}
        </div>
    );
};

export default User;
