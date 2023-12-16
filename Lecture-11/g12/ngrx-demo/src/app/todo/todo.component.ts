import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodoAction } from '../state/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  newTodo: string = '';

  constructor(private store: Store) {}

  addTodo() {
    const action = addTodoAction({ text: this.newTodo });
    this.store.dispatch(action);
  }
}
