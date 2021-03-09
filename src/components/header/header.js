import React from 'react'

const Header = ({home, episodes, chars, quotes, deaths, about}) => {

  return (
    <nav className="bp3-navbar bp3-dark">
      <div style={{margin: '0 auto', width: 'auto'}}>
        <div className="bp3-navbar-group bp3-align-left">
          <div className="bp3-navbar-heading">Вселенная сериала "Во все тяжкие" (Breaking Bad)</div>
        </div>
        <div className="bp3-navbar-group bp3-align-right">
          <button className={home}>Главная страница</button>
          <span className="bp3-navbar-divider"></span>
          <button className={episodes}>Серии</button>
          <span className="bp3-navbar-divider"></span>
          <button className={chars}>Персонажи</button>
          <span className="bp3-navbar-divider"></span>
          <button className={quotes}>Цитаты</button>
          <span className="bp3-navbar-divider"></span>
          <button className={deaths}>Смерти</button>
          <span className="bp3-navbar-divider"></span>
          <button className={about}>О сериале</button>
        </div>
      </div>
    </nav>
  )
}

export default Header