import React from 'react'
import{Link} from 'react-router-dom'
export default function NavBar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-dark ">
    <div className="container-fluid">
      <a className="navbar-brand text-warning" href="/"><strong>BTech Papers</strong></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse text-white" id="navbarNavAltMarkup">
        <div className="navbar-nav text-white">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
          {/* <a className="nav-link active text-white" aria-current="page" href="/about">About Us</a> */}
          <Link className="nav-link active text-white" aria-current="page" to="/upload">Upload</Link>
            
        </div>
      </div>
    </div>
  </nav>
  )
}
