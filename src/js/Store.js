import AppDispatcher from './AppDispatcher';
import EventEmitter from 'events';

let _board = {
  11: false,
  12: false,
  13: false,
  21: false,
  22: false,
  23: false,
  31: false,
  32: false,
  33: false,
};

const Store = Object.assign({}, EventEmitter.prototype, {

  getState: function() {
    return _board;
  },

  toggle: function(cell) {
    _board[cell] = !_board[cell];
    this.emit('change');
  }

});

AppDispatcher.register(function(payload) {

  switch(payload.actionType) {
    case "TOGGLE_CELL":
      Store.toggle(payload.cell);
    break;

    default:
      return true;
  }


});

window.Store = Store;

export default Store;
