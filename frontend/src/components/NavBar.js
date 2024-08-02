import React from "react"
import { NavLink } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <div className="navbar-nav">
        <NavLink
          to="/"
          className="nav-link btn btn-outline-primary rounded-pill mx-2"
          activeClassName="active"
        >
          Tools
        </NavLink>
        <NavLink
          to="/customers"
          className="nav-link btn btn-outline-primary rounded-pill mx-2"
          activeClassName="active"
        >
          Customers
        </NavLink>
        <NavLink
          to="/rentals"
          className="nav-link btn btn-outline-primary rounded-pill mx-2"
          activeClassName="active"
        >
          Rentals
        </NavLink>
        <NavLink
          to="/stats"
          className="nav-link btn btn-outline-primary rounded-pill mx-2"
          activeClassName="active"
        >
          Stats
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
