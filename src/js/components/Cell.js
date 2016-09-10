import React from 'react';
import * as Actions from './../Actions';

export default class Cell extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    Actions.toggleCell(this.props.name);
  }

  render() {
    let classes = "cell";
    if(this.props.value){
      classes += " filled";
    }

    return (
      <span className={classes} onClick={this._handleClick}>{this.props.name}</span>
    );
  }
}
