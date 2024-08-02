import React from "react"
import "bootstrap/dist/css/bootstrap.min.css" // Make sure Bootstrap is imported

function Header() {
  return (
    <header className="header bg-info py-3">
      <div className="container d-flex align-items-center">
        <h1
          className="text-white"
          style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
        >
          Lumpy Tool Rental
          <span className="logo" role="img">
            🛠️
          </span>
        </h1>
      </div>
    </header>
  )
}

export default Header
