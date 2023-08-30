import Header from './Header'
import {BiHeart} from 'react-icons/bi'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Sidebar from './Sidebar'
const Layout = ({children, title = []}) => {
    const location = useLocation()
    return(
        <main className='has-navbar-fixed-top'>
            <Helmet>
                    <title>{title} / Furries.Network</title> 
            </Helmet>
            <Header />
            {
                location.pathname === "/" || location.pathname === "/users" ?
                <div className='mb-6' style={{marginTop: 60 + "px"}}>
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <Sidebar />
                            </div>
                            {children}
                            <div className="column"></div>
                        </div>
                    </div>
                </div>
                :
                <div className='mb-6' style={{marginTop: 60 + "px"}}>
                    {children}
                </div>
            }
            
            {location.pathname !== "/" ?
                <footer className="footer">
                    <div className="content has-text-centered">
                        <p>Hecho 101% con <BiHeart /> en México. &copy; 2023 - Todos los derechos reservados.</p>
                    </div>
                </footer>
                : ""
            }

        </main>
    )
}
export default Layout