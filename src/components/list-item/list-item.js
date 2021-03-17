import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class ListItem extends Component {
  render() {

    return (
        <div style={{margin: '10px'}}>
          <div className="card-body text-white">
            {this.props.children}
          </div>
        </div>
    )
  }
}