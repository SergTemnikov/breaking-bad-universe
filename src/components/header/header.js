import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

const Header = () => {

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

{/* <div class="ui inverted segment">
  <div class="ui inverted secondary menu">
    <a class="active item">
      Home
    </a>
    <a class="item">
      Messages
    </a>
    <a class="item">
      Friends
    </a>
  </div>
</div> */}

export default Header