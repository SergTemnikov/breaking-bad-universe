import React, {Component} from 'react'
import ItemsList from '../../components/items-list'
import getService from '../../service/fetch-service'

export default class PageDeaths extends Component {

  getService = new getService()

  render() {
    return (
      <ItemsList 
        getData={this.getService.getAllDeaths}
        renderItem={({id, death, cause, last}) => {
          return {
            head: 'Список погибших',
            id: id,
            title: `Персонаж: ${death}`,
            data: `Причина смерти: ${cause}, последние слова: ${last}`  
          }
        }}/>
    )
  }
}