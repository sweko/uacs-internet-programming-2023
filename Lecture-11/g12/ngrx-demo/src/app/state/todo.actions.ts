import { createAction, props } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

export const ADD_TODO = '[Todo] Add Todo';

export const addTodoAction = createAction(
    ADD_TODO,                   // The name of the action
    props<{ text: string }>()   // The type of the payload
);

