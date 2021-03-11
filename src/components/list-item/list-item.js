import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class ListItem extends Component {
  render() {

    return (
        <div style={{margin: '10px'}} className="card">
          <div className="card-body bg-success text-white">
            {this.props.children}
          </div>
        </div>
    )
  }
}