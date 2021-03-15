import React, {Component} from 'react'
import ItemsList from '../../components/items-list'
import getService from '../../service/fetch-service'

export default class PageQuotes extends Component {

  getService = new getService()

  render() {
    return (
      <ItemsList 
        getData={this.getService.getAllQuotes}
        renderItem={({id, quote, author, episode}) => {
          return {
            head: 'Цитаты персонажей',
            id: `${id}: ${episode}, ${author}: `,
            data: `Цитата: "${quote}"`  
          }
        }}/>
    )
  }
}