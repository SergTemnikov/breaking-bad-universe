import React, {Component} from 'react'
import PageEpisodes from '../../pages/page-episodes'
import Header from '../header/header'

export default class App extends Component {

  state = {
    classes: {
      home: "bp3-button bp3-minimal bp3-icon-home",
      episodes: "bp3-button bp3-minimal bp3-icon-film",
      chars: "bp3-button bp3-minimal bp3-icon-person",
      quotes: "bp3-button bp3-minimal bp3-icon-citation",
      deaths: "bp3-button bp3-minimal bp3-icon-blocked-person",
      about: "bp3-button bp3-minimal bp3-icon-map"
    }
  }

  render() {
    return (
      <div>
        <Header {...this.state.classes}/>
        <PageEpisodes />
      </div>
    )
  }
}