import React, {Component} from 'react'
import Spinner from '../spinner'

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
      const {id} = item
      const label = this.props.renderItem(item)
      return (
        <li 
          key={id}
          style={{cursor: 'pointer', listStyle: 'none'}}>
            {label}
        </li>
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
      <ul>
        {items}
      </ul>
    )
  }
}