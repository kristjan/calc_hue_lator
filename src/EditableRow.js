import React, { Component } from 'react';

class EditableRow extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: props.quantity };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ quantity: event.target.value });
    this.props.onChange(this.props.name, event.target.value);
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>
          <input type="number" value={this.state.quantity} onChange={this.handleChange} />
        </td>
      </tr>
    )
  }
}

export default EditableRow;
