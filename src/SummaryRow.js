import React, { Component } from 'react';

class SummaryRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td> {this.props.quantity} </td>
      </tr>
    )
  }
}

export default SummaryRow;
