import {Component} from "react";
import Post from "../post/Post";
import './PostList.css'
import {connect} from "react-redux";

class PostsList extends Component {
    render() {
        const {posts} = this.props;
        return (
            <div className='posts-block'>
                {
                    posts.length > 0 ?
                        posts.reverse().map(post => (<Post key={post.id} post={post} postId={post.id}/>)) : null
                }
            </div>
        )
    }
}

const mapStateToProps = ({posts}) => ({posts});

export default connect(mapStateToProps, null)(PostsList);
