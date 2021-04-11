import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './header.css'

export default class Header extends Component {

  addActive = () => {
    
  }

  render () {
    return (
      <div className='header-wrapper'>
        <div className='header'>
          <NavLink to='/home'>ГЛАВНАЯ</NavLink>
          <NavLink to='/episodes'>СЕРИИ</NavLink>
          <NavLink to='/characters'>ПЕРСОНАЖИ</NavLink>
          <NavLink to='/quotes'>ЦИТАТЫ</NavLink>
          <NavLink to='/deaths'>ПОГИБШИЕ</NavLink>
          <NavLink to='/about'>О СЕРИАЛЕ</NavLink>
        </div>
      </div>
    )
  }
  
}