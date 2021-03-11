import React, {Component} from 'react'
import PageEpisodes from '../../pages/page-episodes'
import Header from '../header/header'
import {Route} from 'react-router-dom'
import PageHome from '../../pages/page-home'
import './app.css'

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />     
          <Route path='/' exact component={PageHome}/>
          <Route path='/episodes' exact component={PageEpisodes}/>
      </div>
    )
  }
}