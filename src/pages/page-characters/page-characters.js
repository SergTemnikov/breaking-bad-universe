import React, {Component} from 'react'
import ItemsList from '../../components/items-list'
import getService from '../../service/fetch-service'

export default class PageCharacters extends Component {

  getService = new getService()

  render() {
    return (
      <ItemsList 
        getData={this.getService.getAllCharacters}
        renderItem={({id, name, nickname, img}) => {
          return {
            id: id,
            head: 'Список персонажей',
            avatar: img,
            title: `Имя: ${name}`,
            data: `Прозвище: ${nickname}`  
          }
        }}/>
    )
  }
}