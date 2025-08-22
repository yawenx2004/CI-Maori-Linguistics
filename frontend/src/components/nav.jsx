import React from 'react';
import { NavLink } from 'react-router';

function Nav(props) {
  return (
    <nav>
      <h2>CI-Māori Linguistics Interface</h2>
      <ul className="nav">
        <li className="nav"><NavLink to="/" className="NavLink cta">+ New Run</NavLink></li>
        <li className="nav"><NavLink to="/tasks" className="NavLink">Task History</NavLink></li>
        <li className="nav"><NavLink to="/about" className="NavLink">About</NavLink></li>
        <li className="nav"><NavLink to="/signin" className="NavLink">Sign In</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
