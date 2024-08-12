import React from "react";

const NavigationBar = () => {
  return (
    <React.Fragment>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Taxi
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
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Vehicles
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/create-vehicle">
                    Create Vehicle
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/create-category">
                    Create Category
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/view-category">
                    Categories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/calculate">
                    Calculate Trip Charges
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavigationBar;
