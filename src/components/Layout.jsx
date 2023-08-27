import Header from './Header'
import {BiHeart} from 'react-icons/bi'
const Layout = ({children, title = []}) => {
    return(
        <main>
            <head>
                <title>{title}</title>
            </head>
            <Header />
            {children}
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>Hecho 101% con <BiHeart /> en México. &copy; 2023 - Todos los derechos reservados.</p>
                </div>
            </footer>
        </main>
    )
}
export default Layout