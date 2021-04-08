import React, {Component} from 'react'
import Header from '../header/header'
import {Route} from 'react-router-dom'
import { PageHome, PageEpisodes, 
  PageCharacters, PageQuotes, PageDeaths } from '../../pages'
import './app.css'

export default class App extends Component {

  render() {
    return (
      <div className='app'>
        <Header />
        <Route path='/' exact component={PageHome}/>
        <Route path='/episodes' exact component={PageEpisodes}/>
        <Route path='/characters' exact component={PageCharacters}/>
        <Route path='/quotes' exact component={PageQuotes}/>
        <Route path='/deaths' exact component={PageDeaths}/>
      </div>
      
    )
  }
}