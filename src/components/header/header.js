import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from './header.module.css'

const Header = () => {

  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>HOME</Link>
        <Link className="nav-item" to='/episodes'>EPISODES</Link>
        <Link className="nav-item" to='/characters'>CHARACTERS</Link>
        <Link className="nav-item" to='/quotes'>QUOTES</Link>
        <Link className="nav-item" to='/deaths'>DEATHS</Link>
        <Link className="nav-item" to='/about'>ABOUT</Link>
      </div>
    </nav>
  )
}


export default Header