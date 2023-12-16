import { createReducer, on } from '@ngrx/store';
import { addTodoAction } from './todo.actions';
import { TodoState, initialState } from './todo.state';

export const todoReducer = createReducer<TodoState>(
  initialState,
  on(addTodoAction, (state, action) => {
    console.log('Adding todo: ', action.text);
    return {
      ...state,
      todos: [...state.todos, action.text],
    };
  })
);