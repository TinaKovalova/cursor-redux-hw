import {Component} from "react";
import Post from "../post/Post";
import {connect} from "react-redux";

class PostsList extends Component {
    render() {
        console.log('List props', this.props)
        const {posts, authors} = this.props;
        return (
            <div>
                {
                    posts.length > 0 ?
                        posts.map(post =>
                            (<Post
                                key={post.id}
                                author={authors.find(author => author.id == post.authorID)}
                                {...post}/>)) : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts,
    authors: state.authors
});

export default connect(mapStateToProps, null)(PostsList);
