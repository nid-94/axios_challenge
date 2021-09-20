import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions/actions";
import User from "./User";

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    useEffect(() => dispatch(getUsers()), []);
    return (
        <div>
            <h2>List of persons</h2>
            <div className="card">
                {users.map((user, i) => (
                    <User users={user} key={i} />
                ))}
            </div>
        </div>
    );
};

export default UserList;
