import React, {Component} from 'react'
import Spinner from '../spinner'
import ListItem from '../list-item'
import style from './items-list.module.css'

export default class ItemsList extends Component {

  state = {
    itemsList: null
  }

  componentDidMount() {
    const {getData} = this.props
    getData()
     .then(itemsList => {
      this.setState({itemsList})
     })
  }

  renderItems(arr) {
    return arr.map(item => {
      const {id, title, data, avatar} = this.props.renderItem(item)
      return (
          <ListItem 
            key={id}
            style={{cursor: 'pointer', listStyle: 'none'}}
            {...this.props}>
              <img style={{width: '100px'}} src={avatar ? avatar : null} alt={avatar ? 'avatar' : null}/>
              <h5 className="card-title">{id}: {title}</h5>
              <p className="card-text">{data ? data : null}</p>
          </ListItem>    
      )
    })
  }

  render() {

    const {itemsList} = this.state

    if (!itemsList) {
      return <div className={style.spinner}><Spinner/></div>
    }

    const items = this.renderItems(itemsList)
    const { head } = this.props.renderItem(itemsList)

    return (
        <div>
          <h3 style={{color: 'white', textAlign: 'center'}}>{head ? head : null}</h3>
          {items}
        </div>
    )
  }
}