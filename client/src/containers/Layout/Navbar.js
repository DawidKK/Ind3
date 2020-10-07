import React from 'react'
import { Link } from "react-router-dom";

const Navbar = ({ className }) => {
  return (
      <ul className={className}>
        <li className="navigation-list__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation-list__item">
          <Link to="/crud">Crud</Link>
        </li>
        <li className="navigation-list__item">
          <Link to="/d3">D3</Link>
        </li>
      </ul>
  )
}

export default Navbar
