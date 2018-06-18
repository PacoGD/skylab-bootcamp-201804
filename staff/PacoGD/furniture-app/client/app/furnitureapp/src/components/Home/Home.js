import React from 'react';
// import '../App.css';
// import App from '../App'
import { withRouter } from 'react-router-dom'
import './index.css'
// import logic from '../logic'


function Home(props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="#" className="navbar-brand">Logo</a>
      <button className="navbar-toggler" data-target="#navigation" data-control="navigation" data-toggle="collapse">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navigation">
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <a href="#" className="nav-link">Home</a>
          </li>					
          <li className="nav-item">
            <a href="#" className="nav-link">Feature</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" id="preview" href="#" role="button" aria-haspopup="true" aria-expanded="false">Products</a>
            <div className="dropdown-menu" aria-lableledby="preview">
              <a className="dropdown-item" href="#">Product1</a>
              <a className="dropdown-item" href="#">Product2</a>
              <a className="dropdown-item" href="#">Product3</a>
              <a className="dropdown-item" href="#">Product4</a>
            </div>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Service</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>

    )
}

export default withRouter(Home)