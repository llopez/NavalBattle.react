import AppDispatcher from './AppDispatcher';
import EventEmitter from 'events';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAmPPO1kGB_iGsGaUXjUQy5DT_h_o3ErRE",
  authDomain: "navalbattle-b9f62.firebaseapp.com",
  databaseURL: "https://navalbattle-b9f62.firebaseio.com",
  storageBucket: "",
};

let _firebase_app = firebase.initializeApp(config);

let _auth = _firebase_app.auth();

_auth.signInWithEmailAndPassword('luigibyte@gmail.com', 'password').catch(function(error) {
  console.log(error);
});

let _db = _firebase_app.database();

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
    let d = {};
    d[cell] = !_board[cell];

    _db.ref("board").update(d).then(function() {
      _board[cell] = d[cell];
    }).catch(function(err) {
      console.log(err);
    });
    this.emit('change');
  },

  sync: function(data) {
    _board = data;
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

_db.ref('board').on('value', function(snapshot) {
  Store.sync(snapshot.val());
});

export default Store;
