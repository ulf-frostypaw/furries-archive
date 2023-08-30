import {Link} from 'react-router-dom'
import { BiSolidUser} from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'
const Sidebar = () => {
    return(
        <div class="box is-radiusless" >
             <aside className="menu">
                <p className="menu-label">General</p>
                <ul className="menu-list">
                    <li>
                        <Link className="">
                            <span className="icon">
                                <BiSolidUser />
                            </span>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="">
                            <span className="icon">
                                <AiOutlinePlus />
                            </span>
                            <span>Premium</span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar