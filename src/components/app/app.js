import React, {Component} from 'react'
import PageEpisodes from '../../pages/page-episodes'
import Header from '../header/header'
import {Route} from 'react-router-dom'
import PageHome from '../../pages/page-home'
import PageCharacters from '../../pages/page-characters'
import PageQuotes from '../../pages/page-quotes'
import './app.css'

export default class App extends Component {

  render() {
    return (
      <div className='app'>
        <Header/>     
          <Route path='/' exact component={PageHome}/>
          <Route path='/episodes' exact component={PageEpisodes}/>
          <Route path='/characters' exact component={PageCharacters}/>
          <Route path='/quotes' exact component={PageQuotes}/>
      </div>
    )
  }
}