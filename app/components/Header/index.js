import React from 'react';
import Data from './data';
// import { FormattedMessage } from 'react-intl';

import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Logo from './codemi.png';

function Header() {
  return (
    <div>
      <NavBar>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <HeaderLink to="/">
            <Img src={Logo} alt="react-boilerplate - Logo" />
          </HeaderLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav mr-auto" />
            <form className="form-inline my-2 my-lg-0">
              <div>
                <i className="fa fa-bell mr-4" aria-hidden="true" />
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBITLnZ3sR4MT3hvFOlphhQGwfsi8H2OH5EgLzKm6iR5McCZnt&s"
                  alt="img"
                  className="img-thumbnail"
                />
              </div>
            </form>
          </div>
        </nav>
      </NavBar>
      <Data />
    </div>
  );
}

export default Header;
