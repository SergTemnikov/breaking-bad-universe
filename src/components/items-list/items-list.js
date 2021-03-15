import React, {Component} from 'react'
import Spinner from '../spinner'
import ListItem from '../list-item'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Grid, Image } from 'semantic-ui-react'

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
              <img style={{width: '100px'}} src={avatar ? avatar : null}/>
              <h5 className="card-title">{id}: {title}</h5>
              <p className="card-text">{data ? data : null}</p>
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
    const { head } = this.props.renderItem(itemsList)
    return (
      <div className="d-flex justify-content-center">
        <div style={{width: '750px'}}>
          <h3 style={{marginTop: '10px',color: 'white', textAlign: 'center'}}>{head ? head : null}</h3>
          {items}
        </div>
      </div>
    )
  }
}