import toDos from './todo.reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  toDos
});

export default rootReducer;
