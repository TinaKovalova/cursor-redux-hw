import {Component} from "react";
import {connect} from "react-redux";
import {faMessage, faHeart, faRetweet, faShare, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Post.css';
import {setActivity} from "../../redux/actions";

class Post extends Component {

    getPostsAuthor = (authors, id) => authors.find(author => author.id == id);
    onClick = (event) => {
        const targetName = event.currentTarget.getAttribute('name');
        this.props.setActivity(this.props.post, targetName)
    }

    render() {
        const {content, image, date, likes, reposts, comments} = this.props.post;
        const {name, photo, nickname} = this.props.author;

        return (
            <div className='post d-flex'>
                <img src={photo} className='photo' alt='avatar'/>
                <div className='content d-flex'>
                    <div>
                        <h3>{name}</h3>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        <span>{nickname} - {date}</span>
                    </div>
                    <p>{content}</p>
                    <img src={image} className='content-image' alt='content'/>
                    <div className='d-flex post-menu'>
                        <div onClick={this.onClick} name='comments'>
                            <FontAwesomeIcon icon={faMessage}/>
                            <label>{comments}</label>
                        </div>
                        <div onClick={this.onClick} name='reposts'>
                            <FontAwesomeIcon icon={faRetweet}/>
                            <label>{reposts}</label>
                        </div>
                        <div onClick={this.onClick} name='likes'>
                            <FontAwesomeIcon icon={faHeart}/>
                            <label>{likes}</label>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faShare}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({posts, authors}, {postId}) => {
    const post = posts.find(post => post.id == postId);
    const author = authors.find(author => author.id == post.authorID);
    return {post, author}
}


const mapDispatchToProps = (dispatch) => {
    return {
        setActivity: (post, type) => dispatch(setActivity(post, type)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
