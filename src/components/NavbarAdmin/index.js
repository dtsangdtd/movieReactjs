import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
export default class NavbarAdmin extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-md bg-dark navbar-dark'>
        <Link className='navbar-brand' to='/'>
          Admin
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#collapsibleNavbar'
        >
          <span className='navbar-toggler-icon' />
        </button>
        {/* Navbar links */}
        <div className='collapse navbar-collapse' id='collapsibleNavbar'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink
                activeClassName='active'
                className='nav-link'
                to='/dashboard'
              >
                Dash Board
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink activeClassName='active' className='nav-link' to='/user'>
                User
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
