import React, { Component } from 'react';



export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M3 12l1.5 1.5L7 12v-2l-2.5-1.5L3 12zM6 12h2v6H6zm4 0h2v6h-2zm4 0h2v6h-2zM7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h2v2h-2v6H7V10H5V8h2zm2-4h4a1 1 0 0 1 1 1v2H6V5a1 1 0 0 1 1-1z"/>
</svg>
            <i className="fa-solid fa-mobile-screen-button me-2"></i>
            Shoe Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-shopping-cart me-2"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M2 2h3l1 4h12l1-4h4" />
                    <path d="M6 6h15l3 11H6" />
                  </svg>
                  Your Cart 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}