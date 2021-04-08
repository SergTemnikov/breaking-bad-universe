import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './header.css'

export default class Header extends Component {

  addActive = () => {
    
  }

  render () {
    return (
      <div className='header-wrapper'>
        <div className='header'>
          <Link to='/'>ГЛАВНАЯ</Link>
          <Link to='/episodes'>СЕРИИ</Link>
          <Link to='/characters'>ПЕРСОНАЖИ</Link>
          <Link to='/quotes'>ЦИТАТЫ</Link>
          <Link to='/deaths'>ПОГИБШИЕ</Link>
          <Link to='/about'>О СЕРИАЛЕ</Link>
        </div>
      </div>
    )
  }
  
}