import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getComments } from "./../redux/actions/actions";
import { useSelector } from "react-redux";
import { Card, Button, Image, Breadcrumb } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Post = ({ match, history }) => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(getComments(match.params.id)), [match.params]);
    const comments = useSelector((state) => state.comments);
    return (
        <div>
            <Breadcrumb>
                <Link to="/">
                    <Button icon="home" inverted color="orange" />
                </Link>
                <Link to="/user">
                    <Breadcrumb.Section link>User</Breadcrumb.Section>
                </Link>
                <Breadcrumb.Divider icon="right chevron" />
                <Link to="/user">
                    <Breadcrumb.Section link>Profile</Breadcrumb.Section>
                </Link>
                <Breadcrumb.Divider icon="right chevron" />
                <Breadcrumb.Section link onClick={() => history.goBack()}>
                    Posts
                </Breadcrumb.Section>
                <Breadcrumb.Divider icon="right chevron" />
                <Breadcrumb.Section>Comments</Breadcrumb.Section>
                <Breadcrumb.Divider icon="right arrow" />
                <Breadcrumb.Section active>
                    User Post Comments
                </Breadcrumb.Section>
            </Breadcrumb>
            <h2>coments</h2>
            <div className="card">
                {comments.map((el) => (
                    <Card>
                        <Card.Content>
                            <Image
                                floated="right"
                                size="tiny"
                                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                            />
                            <br />
                            <Card.Meta>{el.name}</Card.Meta>
                            <Card.Description>
                                <strong>email:</strong> {el.email}
                                <br />
                                <strong>Comment:</strong> {el.body}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                ))}
            </div>
            <Button
                content="Previous"
                icon="left arrow"
                labelPosition="left"
                inverted
                color="brown"
                onClick={() => history.goBack()}
            />
            <Link to="/user">
                <Button
                    content="USERS"
                    icon="address book outline"
                    labelPosition="left"
                    inverted
                    color="orange"
                />
            </Link>
            <br /><br />
        </div>
    );
};

export default Post;
