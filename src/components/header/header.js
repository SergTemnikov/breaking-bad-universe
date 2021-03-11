import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from './header.module.css'

const Header = () => {

  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="nav-item" to='/'>ГЛАВНАЯ</Link>
        <Link className="nav-item" to='/episodes'>СЕРИИ</Link>
        <Link className="nav-item" to='/characters'>ПЕРСОНАЖИ</Link>
        <Link className="nav-item" to='/quotes'>ЦИТАТЫ</Link>
        <Link className="nav-item" to='/deaths'>СМЕРТИ</Link>
        <Link className="nav-item" to='/about'>О СЕРИАЛЕ</Link>
      </div>
    </nav>
  )
}


export default Header