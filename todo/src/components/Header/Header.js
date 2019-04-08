import './Header.css';
import React from 'react'
import {Link} from 'react-router-dom';

function Header(props) {
  return (
    <div className="header">
        <h1>To Do List App</h1>
        <nav>
        
         
        {props.isAuthenticated ? <Link  className="link" to="/logout">Logout</Link> : <Link  className="link" to="/login">Login</Link>}
        </nav>
        
    </div>
  )
}

export default Header;

