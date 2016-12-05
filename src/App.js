import React, { Component } from 'react';
import EditableRow from './EditableRow.js';
import SummaryRow from './SummaryRow.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color:    0,
      ambiance: 0,
      white:    0
    };

    this.update = this.update.bind(this);
  }

  update(name, count) {
    let newCount = {}
    newCount[name] = count
    this.setState(newCount);
  }

  total() {
    let sum = 0;
    for (let name of Object.keys(this.state)) {
      if (name === 'total') continue;
      var count = parseInt(this.state[name], 10);
      if (!isNaN(count)) sum += count
    }
    return sum;
  }

  render() {
    return (
      <table>
        <tbody>
          <EditableRow name='color' quantity={this.state.color} onChange={this.update} />
          <EditableRow name='ambiance' quantity={this.state.ambiance} onChange={this.update} />
          <EditableRow name='white' quantity={this.state.white} onChange={this.update} />
          <SummaryRow name='total' quantity={this.total()} />
        </tbody>
      </table>
    );
  }
}

export default App;
