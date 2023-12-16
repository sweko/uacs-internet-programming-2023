// rootReducer.ts
import { combineReducers } from '@ngrx/store';
import { todoReducer } from './todo.reducer';

export const rootReducer = combineReducers({
  todos: todoReducer,
  // Additional reducers for other slices of state
});