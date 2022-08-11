import {Component} from "react";
import './Post.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMessage, faHeart, faRetweet, faShare, faCheckCircle} from '@fortawesome/free-solid-svg-icons';


export default class Post extends Component {

    render() {
        console.log('Post props', this.props)

        const {content, image, date, author: {name, photo, nickname}} = this.props;
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
                        <div>
                            <FontAwesomeIcon icon={faMessage}/>
                            <label>482</label>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faRetweet}/>
                            <label>146</label>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faHeart}/>
                            <label>887</label>
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
