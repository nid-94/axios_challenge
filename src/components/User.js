import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const User = ({ users }) => {
    const dispatch = useDispatch();
    return (
        <Card>
            <Card.Content>
                <Image
                    floated="right"
                    size="tiny"
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                />
                <br />
                <Card.Meta>{users.name}</Card.Meta>
                <Card.Description>
                    <strong>username:</strong> {users.username}
                    <br />
                    <strong>email:</strong> {users.email}
                    <br />
                    <strong>phone:</strong> {users.phone}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Link to={`/user/posts/${users.id}`}>
                    <Button basic color="green">
                        Profile
                    </Button>
                </Link>
                <span>press to view posts</span>
            </Card.Content>
        </Card>
    );
};

export default User;
