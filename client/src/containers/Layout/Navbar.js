import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/crud">Crud</Link></li>
        <li><Link to="/d3">D3</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
