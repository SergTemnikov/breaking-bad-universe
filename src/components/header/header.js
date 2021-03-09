import React from 'react'

const Header = () => {
  return (
    <nav class="bp3-navbar bp3-dark">
      <div style={{margin: '0 auto', width: 'auto'}}>
        <div class="bp3-navbar-group bp3-align-left">
          <div class="bp3-navbar-heading">Breaking Bad Universe</div>
        </div>
        <div class="bp3-navbar-group bp3-align-right">
          <button class="bp3-button bp3-minimal bp3-icon-home">Главная страница</button>
          <span class="bp3-navbar-divider"></span>
          <button class="bp3-button bp3-minimal bp3-icon-film">Серии</button>
          <span class="bp3-navbar-divider"></span>
          <button class="bp3-button bp3-minimal bp3-icon-person">Персонажи</button>
          <span class="bp3-navbar-divider"></span>
          <button class="bp3-button bp3-minimal bp3-icon-citation">Цитаты</button>
          <span class="bp3-navbar-divider"></span>
          <button class="bp3-button bp3-minimal bp3-icon-blocked-person">Смерти</button>
          <span class="bp3-navbar-divider"></span>
        </div>
      </div>
    </nav>
  )
}

export default Header