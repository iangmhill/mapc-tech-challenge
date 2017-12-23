import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './../../sass/Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header-component">
        <ul>
          <li>
            <NavLink to={'/'} activeClassName="active">
              Cast your vote
            </NavLink>
          </li>
          <li>
            <NavLink to={'/results'} activeClassName="active">
              View results
            </NavLink>
          </li>
        </ul>        
      </header>
    )
  }
}

Header.propTypes = {
}

export default Header;
