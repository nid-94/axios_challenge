import "./App.css";
import Profile from "./components/Profile";
import UserList from "./components/UserList";
import {Route,Switch } from 'react-router-dom';
import Post from './components/Post';
import Error from "./components/Error";



function App() {
    return (
        <div className="App">
            

            <Switch>
                <Route path="/post" component={Post}/>
                <Route exact path="/user" component={UserList}/>
                <Route path="/user/:id" render={(props)=><Profile {...props}/>}/>
                <Route component={Error}/>
            </Switch>
        </div>
    );
}

export default App;
