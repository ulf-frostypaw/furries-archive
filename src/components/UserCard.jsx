import { Link } from "react-router-dom"
import {BiSolidUserPlus} from 'react-icons/bi'
const UserCard = () => {
    return(
        <div className="mb-4">
            <div class="card">
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
                        <div className="media-right">
                            <button type="submit" className="button primary">
                                <span class="icon">
                                    <BiSolidUserPlus />
                                </span>
                                <span>Seguir</span>    
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard