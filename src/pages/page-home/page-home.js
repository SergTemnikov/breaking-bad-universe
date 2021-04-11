import React, {Component} from 'react'
import logo from '../../images/home-logo.png'
import './page-home.css'

export default class PageHome extends Component {
  render() {
    return (
      <div className='image'>
        <img src={logo} alt='logo'></img>
      </div>
    )
  }
}