import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import constants from './../constants';

import './../../sass/Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-component">
        <header>
          <h1>{constants.HEADER.TITLE}</h1>
        </header>
        <nav>
          <ul>
            <li>
              <NavLink exact to={'/'} activeClassName="active">
                Cast your vote
              </NavLink>
            </li>
            <li>
              <NavLink to={'/results'} activeClassName="active">
                View results
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

Header.propTypes = {
}

export default Header;
