import {BiHeart, BiCommentDetail} from 'react-icons/bi'
import {FaShare} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const PostCard = () => {
    return(
        <div className="mb-4 is-vcentered">
            <div className="card is-gap">
                <div className="card-content">
                    <div className="media">
                    <div className="media-left">
                        <Link to="/user/userpahe" className="image is-48x48 m-auto">
                            <img src="https://bulma.io/images/placeholders/96x96.png" className="is-rounded" alt="Placeholder image" />
                        </Link>
                    </div>
                    <div className="media-content">
                        <p className="title is-5">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                    </div>
                    </div>

                    <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    </div>
                </div>
                <div className="card-image p-5">
                    <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" style={{borderRadius: 10 + "px"}} alt="Placeholder image" />
                    </figure>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item">
                        <span class="icon"><BiHeart /></span>
                        <span>Me gusta</span>
                    </a>
                    <a href="#" className="card-footer-item">
                        <span class="icon"><BiCommentDetail /></span>
                        <span>Comentarios</span>
                    </a>
                    <a href="#" className="card-footer-item">
                        <span class="icon"><FaShare /></span>
                        <span>Compartir</span>
                    </a>
                </footer>
            </div>
        </div>
    )
}
export default PostCard