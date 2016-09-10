import AppDispatcher from './AppDispatcher';

export function toggleCell(cell) {

  AppDispatcher.dispatch({
    actionType: 'TOGGLE_CELL',
    cell: cell
  });

}
