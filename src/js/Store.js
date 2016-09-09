

_board = {
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

const Store = {

  getState: function() {
    return _board;
  }

}

export default Store;
