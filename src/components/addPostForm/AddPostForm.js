import {Component} from "react";
import './AddPostForm.css';
import {connect} from "react-redux";
import {addPost} from "../../redux/actions";

class AddPostForm extends Component {
    state = {
        content: '',
        image: '',
        authorID: null,
        formIsValid: false
    }

    onChange = (event) => {
        const target = event.target;
        this.setState({[target.name]: target.value}, () => this.setState({formIsValid: this.checkFormIsValid()}))
    }
    onClick = () => {

        this.props.addPost({
            ...this.state,
            date :`${new Date().toLocaleDateString()}  ${new Date().toLocaleTimeString()}`,
            likes: 0,
            reposts: 0,
            comments: 0,
            statistic: {
                whoLiked:[],
                whoCommented:[],
                whoReposted:[]}})
        this.setState({
            content: '',
            image: '',
            authorID: null,
            formIsValid: false
        })
    }
    checkFormIsValid = () => this.state.content && this.state.authorID && this.state.authorID!=0 && this.state.image;


    render() {
        const {authors} = this.props;
        const {content, image, formIsValid} = this.state;
        return (<form>
            <input type='text' placeholder='image URL' onChange={this.onChange} name='image' required value={image}/>
            <textarea placeholder={`post's text`} onChange={this.onChange} name='content' value={content}/>
            <select onChange={this.onChange} name='authorID'>
                <option value='0'>author</option>
                {
                    authors.length > 0 ? authors.map(author => (
                        <option key={author.id} value={+author.id}>{author.name}</option>)) : null
                }
            </select>
            <button type='button' onClick={this.onClick} disabled={!formIsValid}>add post</button>
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