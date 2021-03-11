import React, {Component} from 'react'
import Spinner from '../spinner'
import ListItem from '../list-item'

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
      const {id, title, data} = this.props.renderItem(item)
      return (
          <ListItem 
            key={id}
            style={{cursor: 'pointer', listStyle: 'none'}}
            {...this.props}>
              <h5 class="card-title">{id}: {title}</h5>
              <p class="card-text">{data ? data : null}</p>
          </ListItem>    
      )
    })
  }

  render() {

    const {itemsList} = this.state
    const spinnerWrapper = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0, 
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    };

    if (!itemsList) {
      return <div style={spinnerWrapper}><Spinner/></div>
    }

    const items = this.renderItems(itemsList)
    return (
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', width: '550px'}}>
        {items}
      </div>
    )
  }
}