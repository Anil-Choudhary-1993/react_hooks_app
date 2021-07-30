import React from 'react'
import {
  Link,
  useParams
} from "react-router-dom";
import './navbar.css'

export default function Navbar() {
  let path = window.location.pathname;
  let params = useParams();

  return (
    <nav className="navbar">
      <ul>
        <li className={path === "/" ? 'active' : ''}><Link to="/">Autocomplete app</Link></li>
        <li className={path === "/counter" ? 'active' : ''}><Link to="/counter">Counter app</Link></li>
        <li className={path === "/crud" ? 'active' : ''}><Link to="/crud">Crud app</Link></li>
        <li className={path === "/search" ? 'active' : ''}><Link to="/search">SearchList app</Link></li>
      </ul>
    </nav>
  )
}