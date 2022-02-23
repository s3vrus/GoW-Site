import * as React from "react"
import { Link } from "gatsby"
import logo from '../images/logo-white.png'

const Header = () => {
  return(
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="God of War logo"/>
          </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link" activeClassName="active-link">
            Home
          </Link>
          <Link to="/characters" className="nav-link" activeClassName="active-link">
            Characters
          </Link>
          <Link to="/realms" className="nav-link" activeClassName="active-link">
            Realms
          </Link>
          <Link to="/enemies" className="nav-link" activeClassName="active-link">
            Enemies
          </Link>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
