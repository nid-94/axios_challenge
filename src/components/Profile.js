import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/actions";
import { Card, Button } from "semantic-ui-react";

const Profile = ({ match, history }) => {
    //dispatch method
    const dispatch = useDispatch();
    useEffect(() => dispatch(getPosts(match.params.id)), [match.params]);

    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return (
        <div>
            <h2>Posts</h2>
            <div className="card">
                {posts.map((el) => (
                    <Card>
                        <Card.Content header={el.title} />
                        <Card.Content description={el.body} />
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
        </div>
    );
};

export default Profile;
