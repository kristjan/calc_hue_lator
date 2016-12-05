import React, { Component } from 'react';

class Row extends Component {
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
    let change = this.props.onChange ?  this.handleChange : null;
    let readOnly = !change;

    console.log("Row", this.props, this.state);
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>
          <input type="number"
                 value={this.state.quantity}
                 onChange={change}
                 readOnly={readOnly} />
        </td>
      </tr>
    )
  }
}

export default Row;
