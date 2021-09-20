import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Image } from "semantic-ui-react";
import { getPosts } from "../redux/actions/actions";

const User = ({ users }) => {
    const dispatch = useDispatch();
    return (
        <Card>
            <Card.Content>
                <Image
                    floated="right"
                    size="tiny"
                    src="https://www.web-soluces.net/webmaster/avatar/AvatarMakerCom-Garcon.png"
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
                <div className="ui two buttons">
                    <Button
                        basic
                        color="green"
                        onClick={() => dispatch(getPosts(users.id))}>
                        Profile
                    </Button>
                </div>
            </Card.Content>
        </Card>
    );
};

export default User;
