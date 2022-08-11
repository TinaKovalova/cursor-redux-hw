import {Component} from 'react';
import './App.css';
import AddPostForm from "./components/addPostForm/AddPostForm";
import PostsList from "./components/postsList/PostsList";

export default class App extends Component {

    render() {
        return (
            <div className="App">
                <AddPostForm/>
                <PostsList/>
            </div>
        );
    }
}

