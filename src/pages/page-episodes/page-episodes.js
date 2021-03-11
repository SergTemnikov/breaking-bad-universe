import React, {Component} from 'react'
import ItemsList from '../../components/items-list'
import getService from '../../service/fetch-service'

export default class PageEpisodes extends Component {

  getService = new getService()

  render() {
    return (
      <ItemsList 
        getData={this.getService.getAllEpisodes}
        renderItem={({id, title, chars}) => {
          return {
            head: 'Список серий',
            id: id,
            title: title,
            data: `Персонажи: ${chars}`  
          }
        }}/>
    )
  }
}