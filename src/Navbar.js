import React, { Component } from 'react'


export class Navbar extends Component {
 
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-white bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="About">About</a>
        
      </div>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
