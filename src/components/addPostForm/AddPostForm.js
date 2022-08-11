import {Component} from "react";
import './AddPostForm.css';
import {connect} from "react-redux";
import {addPost} from "../../redux/actions";

class AddPostForm extends Component {
    state = {
        content: '',
        image: '',
        authorID: null
    }

    onChange = (event) => {
        const target = event.target;
        this.setState({[target.name]: target.value})
    }
    onClick = () => {
        this.props.addPost({...this.state})
        this.setState({
            content: '',
            image: '',
            authorID: ''
        })
    }

    render() {
        const {authors} = this.props;
        const {content, image} = this.state;
        return (<form>
            <input type='text' placeholder='image URL' onChange={this.onChange} name='image' required value={image}/>
            <textarea placeholder={`post's text`} onChange={this.onChange} name='content' value={content}/>
            <select onChange={this.onChange} name='authorID'>

                {
                    authors.length > 0 ? authors.map(author => (
                        <option key={author.id} value={author.id}>{author.name}</option>)) : null
                }
            </select>
            <button type='button' onClick={this.onClick}>add post</button>
        </form>)
    }
}

const mapStateToProps = (state) => ({authors: state.authors});
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => dispatch(addPost(post))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm);