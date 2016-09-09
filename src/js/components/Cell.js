import React from 'react';

export default class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    let classes = "cell";
    if(this.state.active){
      classes += " filled";
    }

    return (
      <span className={classes} onClick={this._handleClick}>{this.props.name}</span>
    );
  }
}
