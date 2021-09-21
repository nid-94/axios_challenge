import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/actions";
import { Card, Button, Breadcrumb } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Profile = ({ match, history }) => {
    //dispatch method
    const dispatch = useDispatch();
    useEffect(() => dispatch(getPosts(match.params.id)), [match.params]);

    const posts = useSelector((state) => state.posts);

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
                <Breadcrumb.Section link onClick={() => history.goBack()}>
                    Profile
                </Breadcrumb.Section>
                <Breadcrumb.Divider icon="right chevron" />
                <Breadcrumb.Section>Posts</Breadcrumb.Section>
                <Breadcrumb.Divider icon="right arrow" />
                <Breadcrumb.Section active>User Posts</Breadcrumb.Section>
            </Breadcrumb>
            <h2>Posts</h2>
            <div className="card">
                {posts.map((el) => (
                    <Card>
                        <Card.Content header={el.title} />
                        <Card.Content description={el.body} />
                        <Card.Content extra>
                            <Link to={`/user/posts/comments/${el.id}`}>
                                <Button basic color="green">
                                    Comments
                                </Button>
                            </Link>
                            <span> press to view comments</span>
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
            <Button
                content="Next"
                icon="right arrow"
                labelPosition="right"
                inverted
                color="brown"
                onClick={() => history.goForward()}
            />
            <br /><br />
        </div>
    );
};

export default Profile;
