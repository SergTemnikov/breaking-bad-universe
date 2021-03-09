import React, {Component} from 'react'

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

    if (!itemsList) {
      return <h2>Loading episodes...</h2>
    }

    const items = this.renderItems(itemsList)
    return (
      <ul>
        {items}
      </ul>
    )
  }
}