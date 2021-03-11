import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class ListItem extends Component {
  render() {

    const {title} = this.props

    return (
        <div className="card">
          <div className="card-body">
            {this.props.children}
          </div>
        </div>
    )
  }
}