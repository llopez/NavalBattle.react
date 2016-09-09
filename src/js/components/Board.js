import React from 'react';
import Cell from './Cell';

export default class Board extends React.Component {

  render() {
    return (
      <div className="board">
        <div className="row">
          <Cell name="11" value={this.state[11]} />
          <Cell name="12" />
          <Cell name="13" />
        </div>
        <div className="row">
          <Cell name="21" />
          <Cell name="22" />
          <Cell name="23" />
        </div>
        <div className="row">
          <Cell name="31" />
          <Cell name="32" />
          <Cell name="33" />
        </div>
      </div>
    );
  }
}
