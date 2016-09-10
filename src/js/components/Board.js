import React from 'react';
import Cell from './Cell';
import Store from './../Store'

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = Store.getState();
  }

  componentWillMount() {
    Store.on('change', function() {
      this.setState(Store.getState())
    }.bind(this));
  }

  render() {
    return (
      <div className="board">
        <div className="row">
          <Cell name="11" value={this.state[11]}/>
          <Cell name="12" value={this.state[12]}/>
          <Cell name="13" value={this.state[13]}/>
        </div>
        <div className="row">
          <Cell name="21" value={this.state[21]}/>
          <Cell name="22" value={this.state[22]}/>
          <Cell name="23" value={this.state[23]}/>
        </div>
        <div className="row">
          <Cell name="31" value={this.state[31]}/>
          <Cell name="32" value={this.state[32]}/>
          <Cell name="33" value={this.state[33]}/>
        </div>
      </div>
    );
  }
}
