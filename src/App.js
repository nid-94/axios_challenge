import "./App.css";
import Profile from "./components/Profile";
import UserList from "./components/UserList";
import { Route, Switch } from "react-router-dom";
import Post from "./components/Post";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="App">
            <NavBar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/user" component={UserList} />
                <Route
                    exact
                    path="/user/posts/:id"
                    render={(props) => <Profile {...props} />}
                />
                <Route
                    path="/user/posts/comments/:id"
                    render={(props) => <Post {...props} />}
                />
                <Route path="/contact" component={Contact} />
                <Route component={Error} />
            </Switch>
        </div>
    );
}

export default App;
