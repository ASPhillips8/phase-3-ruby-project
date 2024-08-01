import React from "react"
import { NavLink } from "react-router-dom"
// import "./NavBar.css"

function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/tools" className="navbar">
        Tools
      </NavLink>
      <NavLink to="/customers" className="navbar">
        Customers
      </NavLink>
      <NavLink to="/rentals" className="navbar">
        Rentals
      </NavLink>
      <NavLink to="/stats" className="navbar">
        Stats
      </NavLink>
    </nav>
  )
}

export default NavBar
