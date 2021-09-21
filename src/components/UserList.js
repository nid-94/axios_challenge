import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions/actions";
import User from "./User";
import { Link } from "react-router-dom";
import { Button, Breadcrumb } from "semantic-ui-react";

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    useEffect(() => dispatch(getUsers()), []);
    return (
        <div>
            <Breadcrumb>
                <Link to="/">
                    <Button icon="home" inverted color="orange" />
                </Link>
                <Breadcrumb.Section link>Users</Breadcrumb.Section>
                <Breadcrumb.Divider icon="right chevron" />
                <Breadcrumb.Section>Profile</Breadcrumb.Section>
                <Breadcrumb.Divider icon="right arrow" />
                <Breadcrumb.Section active>
                    Personal Information
                </Breadcrumb.Section>
            </Breadcrumb>
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
