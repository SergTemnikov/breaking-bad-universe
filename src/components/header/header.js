import React from 'react'
import {Link} from 'react-router-dom'
import './header.module.css'

const Header = () => {

  return (
    
      <div className='ui top fixed inverted fluid six item menu'>
        <div className="ui container inverted secondary pointing menu">
          <div className='item'>
            <Link to='/'>
              <div className="ui secondary button">ГЛАВНАЯ</div>
            </Link>
          </div>
          <div className='item'>
            <Link to='/episodes'>
              <div className="ui secondary button">СЕРИИ</div>
            </Link>
          </div>
          <div className='item'>
            <Link to='/characters'>
              <div className="ui secondary button">ПЕРСОНАЖИ</div>
            </Link>
          </div>
          <div className='item'>
            <Link to='/quotes'>
              <div className="ui secondary button">ЦИТАТЫ</div>
            </Link>
          </div>
          <div className='item'>
            <Link to='/deaths'>
              <div className="ui secondary button">ПОГИБШИЕ</div>
            </Link>
          </div>
          <div className='item'>
            <Link to='/about'>
                <div className="ui secondary button">О СЕРИАЛЕ</div>
            </Link>
          </div>
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