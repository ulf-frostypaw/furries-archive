import {Link} from 'react-router-dom'
const Header = () =>{
    return(
        <nav class="navbar is-black is-radiusless" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <Link className="navbar-item" to="/">FN</Link>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <Link to="/videos" class="navbar-item">Videos</Link>
                    <Link to="/map" class="navbar-item">Map</Link>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                        <Link to="/register" class="button is-primary">
                            <strong>Registrarse</strong>
                        </Link>
                        <Link to="/login" class="button is-light">Iniciar sesión</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Header