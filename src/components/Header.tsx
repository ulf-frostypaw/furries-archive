import { Link } from "react-router-dom"

const Navbar = () =>{
  return(
    <nav>
      <div className="left">
        <div className="logo">
          <Link className="navbar-link" to="/">
            FN
          </Link>
        </div>
      </div>
      <div className="navbar-links">
        <Link className="navbar-link" to="/map">Mapa</Link>
        <Link className="navbar-link" to="/users">Users</Link>
      </div>
      <div className="right-links">
        {/*<img className="avatar-small" src="https://placehold.co/200x100" alt="" />*/}
        <button className="button" type="submit">Login</button>
      </div>
    </nav>
  )
}

export default Navbar