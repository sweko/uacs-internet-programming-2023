# Introduction to ngRx

## Agenda

0. [Installing and Setting Up ngRx](#0-installing-and-setting-up-ngrx)

1. [Core Concepts of ngRx](#1-core-concepts-of-ngrx)
   - 1.1 Actions
   - 1.2 Reducers
   - 1.3 Store

2. [Working with Selectors](#2-working-with-selectors)

3. [Effects in ngRx](#3-effects-in-ngrx)

4. [Best Practices and Tips](#4-best-practices-and-tips)

5. [Alternatives to ngRx](#5-alternatives-to-ngrx)

## 0. Installing and Setting Up ngRx
Setting up ngRx involves installing the necessary packages and configuring them in an Angular application. Ensure you have the required ngRx packages installed in your Angular project. Common packages include `@ngrx/store` for the core store functionality and additional packages based on your project's needs, such as `@ngrx/effects` for handling side effects and `@ngrx/entity` for managing entities.

```bash
npm install @ngrx/store @ngrx/effects @ngrx/entity
```

## 1. Core Concepts of ngRx

### 1.1 Actions

In ngRx, actions are a fundamental concept used to describe events that occur in an application. They represent user interactions or system events that trigger a change in the application state. Understanding and effectively using actions is crucial for building a robust and maintainable state management system.

Actions are plain JavaScript objects that contain a `type` property indicating the type of action being performed. The `type` is typically a string constant and serves as a unique identifier for the action. Additionally, actions can carry additional data, known as the "payload," providing context or information necessary for handling the action.

#### Key Concepts:

- **Uniqueness**: Each action type should be unique within the application. This uniqueness is often achieved by defining action types as constants.
- **Predictability**: Actions should accurately represent user interactions or system events in a way that is easy to understand and predict.

#### Creating Actions:

Actions are usually defined as classes or functions that return action objects. Here's a basic example:

```ts
// Action Type Constant
export const ADD_TODO = '[Todo] Add Todo';

// Action Creator Function
export class AddTodo implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: { text: string }) {}
}
```

in this example, we have an action type constant `ADD_TODO` and an action creator class `AddTodo` that implements the `Action` interface. The payload property carries additional data related to the action.

We can also use the `createAction` function provided by ngRx to create actions:

```ts
// todo.actions.ts
import { createAction, props } from '@ngrx/store';

export const addTodoAction = createAction(
    '[Todo] Add Todo',          // The name of the action
    props<{ text: string }>()   // The type of the payload
);
```

#### Dispatching Actions:
Once actions are created, they need to be dispatched to the ngRx store to initiate the state change. Dispatching is typically done within components or services when responding to user interactions.

```ts
// Dispatching an Action in a Component
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddTodo } from './todo.actions';

@Component({
  selector: 'app-todo',
  template: `
    <input [(ngModel)]="newTodo" />
    <button (click)="addTodo()">Add Todo</button>
  `,
})
export class TodoComponent {
  newTodo: string = '';

  constructor(private store: Store) {}

  addTodo() {
    this.store.dispatch(new AddTodo({ text: this.newTodo }));
  }

  // or, if we created the action using createAction
  addTodo() {
    this.store.dispatch(addTodoAction({ text: this.newTodo }));
  }
}
```

In this example, when the "Add Todo" button is clicked, the AddTodo action is dispatched to the ngRx store with the relevant payload.

Understanding actions and their role in ngRx is foundational to building scalable and predictable state management systems in Angular applications.

### 1.2 Reducers

Reducers are fundamental to the ngRx state management pattern in Angular. They are pure functions responsible for handling dispatched actions and determining how the application state should change in response to those actions. Understanding reducers and implementing them effectively is crucial for maintaining a predictable and scalable state management system.

#### Understanding Reducers as Pure Functions:
- **Pure Functions**: Reducers are pure functions, meaning they produce the same output for the same input and have no side effects. This purity ensures predictability and testability in state transitions.
- **Action Handling**: Reducers take the current state and an action as input and return a new state. The action informs the reducer about the type of operation to perform.
- **Immutable State**: Reducers must not modify the existing state. Instead, they create and return a new state object. Immutability is essential for tracking changes and maintaining the integrity of the state.

#### Implementing Reducers to Manage State:
Reducers are typically organized based on slices of the application state. Each reducer manages a specific part or feature of the overall state.

Here's a basic example of a reducer handling a todo list:

```ts
// Initial State
const initialState = {
  todos: [],
};

// Reducer Function
export function todoReducer(state = initialState, action: TodoActions): TodoState {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      // Creating a new state object with the added todo
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    // Additional case statements for other actions

    default:
      // Returning the current state for unknown actions
      return state;
  }
}
```

In this example, the `todoReducer` function takes the current state and an action of type `TodoActionTypes.ADD_TODO`. It creates a new state object by adding the todo from the action payload to the existing list of todos.

We can also use the `createReducer` function provided by ngRx to create reducers:

```ts
// todo.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addTodoAction } from './todo.actions';

export const initialState = {
  todos: [],
};

export const todoReducer = createReducer(
  initialState,
  on(addTodoAction, (state, action) => {
    return {
      ...state,
      todos: [...state.todos, action.payload],
    };
  })
);
```


#### Combining Reducers:
As applications grow, it's common to have multiple reducers managing different slices of the state. These reducers are then combined into a single reducer using the `combineReducers` function provided by ngRx.

```ts
// rootReducer.ts
import { combineReducers } from '@ngrx/store';
import { todoReducer } from './todo.reducer';

export const rootReducer = combineReducers({
  todos: todoReducer,
  // Additional reducers for other slices of state
});
```

The `combineReducers` function allows composing multiple reducers into one, each responsible for a specific part of the application state.

Understanding how to implement reducers and organize them effectively is essential for building maintainable and scalable Angular applications with ngRx.

### 1.3 Store

The ngRx store is a critical part of the state management pattern in Angular applications. It serves as a centralized container for the entire application state, providing a single source of truth that components can access and interact with. Understanding the store concept and properly setting it up is essential for implementing effective state management in Angular using ngRx.

#### Introducing the Concept of the Store:
- **Single Source of Truth**: The store acts as a single source of truth for the entire application state. This ensures that all components access and update the same data, maintaining consistency.

- **Read-Only State**: The state stored in the ngRx store is immutable and read-only. Components can retrieve data from the store, but they cannot directly modify it. Changes are made through dispatched actions and handled by reducers.

#### Setting Up the ngRx Store in an Angular Application:

The ngRx store is typically set up in the `AppModule` of an Angular application. The `StoreModule.forRoot` method is used to configure the store and provide the root reducer.

```ts
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { rootReducer } from './rootReducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(rootReducer),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

In this example, we import the `StoreModule` from ngRx and pass in the root reducer to the `forRoot` method. This configures the store with the root reducer and makes it available to the entire application.

#### Accessing the Store in Components:

Components can access the store using the `Store` service provided by ngRx. The `select` method is used to retrieve data from the store.

```ts
// todo.component.ts
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoState } from './todo.reducer';

@Component({
  selector: 'app-todo',
  template: `
    <ul>
      <li *ngFor="let todo of todos$ | async">{{ todo }}</li>
    </ul>
  `,
})
export class TodoComponent implements OnInit {
  todos$: Observable<string[]>;

  constructor(private store: Store<TodoState>) {}

  ngOnInit() {
    this.todos$ = this.store.pipe(select('todos'));
  }
}
```

In this example, we use the `select` method to retrieve the `todos` slice of the state from the store. The `async` pipe is used to subscribe to the observable and render the list of todos.

Understanding the ngRx store and how to set it up is crucial for implementing a robust and scalable state management system in Angular applications.

## 2. Working with Selectors

Selectors in ngRx play a crucial role in efficiently extracting and computing specific pieces of state from the store. They act as query functions, providing a way to access and transform the state without directly accessing the store's structure. Understanding how to work with selectors is essential for optimizing state management in Angular applications.

### Selectors as Functions:
- **Abstraction Layer**: Selectors act as an abstraction layer between the components and the store. They encapsulate the details of the state structure, allowing components to remain agnostic to the store's implementation.

- **Efficient Data Retrieval**: Selectors provide a means to efficiently retrieve specific slices of state. Instead of subscribing to the entire state, components can use selectors to subscribe only to the relevant parts of the state tree.

- **Derived State**: Selectors can compute and derive state based on the existing state. This is particularly useful for transforming or combining data before it reaches the components.

### Creating Selectors:

Selectors are typically defined as functions that take the state as input and return a specific piece of state. They can be created using the `createSelector` function provided by ngRx.

```ts
// todo.selectors.ts
import { createSelector } from '@ngrx/store';

export const selectTodos = (state) => state.todos;

export const selectCompletedTodos = createSelector(
  selectTodos,
  (todos) => todos.filter((todo) => todo.completed)
);
```

In this example, we have two selectors: `selectTodos` and `selectCompletedTodos`. The `selectTodos` selector simply returns the `todos` slice of the state. The `selectCompletedTodos` selector uses the `createSelector` function to derive the completed todos from the existing todos.

Another way to create selectors is by using the `createFeatureSelector` function provided by ngRx. This function takes the feature name as input and returns a selector function that returns the feature state.

```ts
// todo.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

// Feature Selector
export const selectTodoState = createFeatureSelector<TodoState>('todos');

// Individual Selectors
export const selectTodos = createSelector(selectTodoState, (state: TodoState) => state.todos);
export const selectCompletedTodos = createSelector(selectTodos, todos => todos.filter(todo => todo.completed));
```

In this example, we use the `createFeatureSelector` function to create a feature selector for the `todos` feature. We then use this feature selector to create individual selectors for the `todos` slice of the state and the completed todos.

- `selectTodoState` is a feature selector that selects the entire `TodoState`.
- `selectTodos` is a selector that retrieves the `todos` array from the `TodoState`.
- `selectCompletedTodos` is a derived selector that filters completed todos from the `selectTodos` result.

### Using Selectors in Components:
Components can then use these selectors to efficiently access state:

```ts
// todo.component.ts
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTodos, selectCompletedTodos } from './todo.selectors';

@Component({
  selector: 'app-todo',
  template: `
    <div>
      <h2>All Todos</h2>
      <ul>
        <li *ngFor="let todo of allTodos$ | async">{{ todo.text }}</li>
      </ul>

      <h2>Completed Todos</h2>
      <ul>
        <li *ngFor="let todo of completedTodos$ | async">{{ todo.text }}</li>
      </ul>
    </div>
  `,
})
export class TodoComponent {
  allTodos$: Observable<Todo[]>;
  completedTodos$: Observable<Todo[]>;

  constructor(private store: Store) {
    this.allTodos$ = store.pipe(select(selectTodos));
    this.completedTodos$ = store.pipe(select(selectCompletedTodos));
  }
}
```

In this component, `selectTodos` and `selectCompletedTodos` are used to efficiently subscribe to specific slices of state.

Working with selectors enhances the maintainability and performance of Angular applications by providing a structured and efficient way to access and transform state data. It also promotes a separation of concerns, allowing for easier testing and changes to the state structure without affecting components.

## 3. Effects in ngRx

- Understanding effects as a mechanism for managing side effects in ngRx.
- Handling asynchronous operations using effects.
- Managing data flow with the `@Effect` decorator.

Effects in ngRx provide a powerful mechanism for managing side effects in a reactive and scalable way. They are particularly useful for handling asynchronous operations, such as HTTP requests or other asynchronous tasks, and for managing complex data flow within an Angular application. Let's delve into the in-depth explanation of ngRx effects.

### Understanding Effects as a Mechanism for Managing Side Effects:
- **Definition**: Effects are functions that listen for actions dispatched from the ngRx store and perform asynchronous or side-effect-producing operations.

- **Separation of Concerns**: Effects help in separating the concerns of state mutation and side-effect management. By moving side effects to effects, the purity of reducers is maintained, making the application more predictable and testable.

- **Centralized Location**: Effects provide a centralized location to handle asynchronous operations, preventing the need to manage them within components or services.

### Handling Asynchronous Operations Using Effects:
- **Async Operations**: Effects are particularly useful for managing asynchronous operations, such as HTTP requests, timer-based events, or any operation that involves waiting for a result.

- **No Blocking UI**: By offloading asynchronous tasks to effects, the main application state is not blocked, ensuring a smooth user experience.

- **Error Handling**: Effects can also handle errors gracefully, providing a centralized location for error management and recovery strategies.

### Managing Data Flow with the @Effect Decorator:
- **Decorator Usage**: Effects are decorated with `@Effect()` to indicate that they should be registered with the ngRx effects system.

- **Action Triggers**: Effects are triggered by specific actions. The `ofType` operator is commonly used to filter actions based on their type.

```ts
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as todoActions from './todo.actions';
import { TodoService } from './todo.service';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.loadTodos), // Trigger on loadTodos action
      mergeMap(() =>
        this.todoService.getTodos().pipe(
          map(todos => todoActions.loadTodosSuccess({ todos })),
          catchError(error => of(todoActions.loadTodosFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
```

In this example, `loadTodos$` is an effect triggered by the `loadTodos` action. It uses the `mergeMap` operator to handle asynchronous operations and dispatches appropriate actions based on the result.

### Effect Lifecycle:

1. **Creation**: Effects are typically created in an Angular service annotated with `@Injectable`.

2. **Registration**: Effects are registered in the `EffectsModule.forRoot` or `EffectsModule.forFeature` in the application module.

```ts
@NgModule({
  imports: [
    // ... other modules
    EffectsModule.forRoot([TodoEffects]),
  ],
})
export class AppModule {}
```

3. **Execution**: Effects are executed when the associated action is dispatched. They listen for specific action types and respond accordingly.

4. **Cleanup**: Effects can perform cleanup operations, such as unsubscribing from observables, when they are no longer needed.

### Using Effects in Components:

Components can dispatch actions that trigger effects. They can also subscribe to the effects to receive data from the store.

```ts
// todo.component.ts
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import { loadTodos } from './todo.actions';

@Component({
  selector: 'app-todo',
  template: `
    <ul>
      <li *ngFor="let todo of todos$ | async">{{ todo.text }}</li>
    </ul>
  `,
})
export class TodoComponent {
  todos$: Observable<Todo[]>;

  constructor(private store: Store) {
    this.store.dispatch(loadTodos());
    this.todos$ = this.store.pipe(select('todos'));
  }
}
```

In this example, the `loadTodos` action is dispatched to the store, triggering the `loadTodos$` effect. The effect then performs the asynchronous operation and dispatches the appropriate actions. The component subscribes to the `todos` slice of the state and renders the list of todos.

By understanding effects, you gain a powerful tool for managing complex asynchronous operations and side effects in your ngRx-powered Angular application. They contribute to a more maintainable, scalable, and predictable state management solution.

## 4. Best Practices and Tips

### Organizing ngRx Code in Large Applications:

1. **Feature Modules:**
   - **Separate Store Modules:** Organize ngRx code into feature modules, each containing its own set of actions, reducers, selectors, and effects.
   - **Lazy Loading:** Consider lazy loading ngRx feature modules to load state management only when needed.

2. **Folder Structure:**
   - **Modular Structure:** Adopt a modular folder structure, separating actions, reducers, selectors, and effects into dedicated folders.
   - **Domain-Driven Design:** Organize ngRx code based on domain features to promote a clear and maintainable structure.

3. **State Composition:**
   - **Slice State Appropriately:** Break down the application state into slices that are managed by separate reducers. This enables more efficient state updates.
   - **Entity State for Collections:** Use `@ngrx/entity` for managing collections of entities to simplify CRUD operations.

4. **Selector Optimization:**
   - **Memoized Selectors:** Leverage memoized selectors to optimize performance by preventing unnecessary recomputation of derived state.
   - **Reselect Library:** Consider using the `reselect` library for creating memoized selectors with complex logic.

### Effective Debugging and Troubleshooting:

1. **Redux DevTools:**
   - **Integrate with DevTools:** Integrate your ngRx store with the Redux DevTools extension for Chrome or Firefox. It provides a powerful interface for inspecting state changes and actions.

2. **Logging:**
   - **Action Logging:** Implement action logging during development to trace the flow of actions and state changes.
   - **Middleware for Logging:** Use middleware to log actions, state changes, and effects for detailed debugging information.

3. **Selective Dispatch:**
   - **Selective Dispatching:** Use selective dispatching of actions during debugging to isolate specific scenarios or components.

4. **Unit Testing:**
   - **Comprehensive Tests:** Write comprehensive unit tests for actions, reducers, selectors, and effects to ensure the correctness of your ngRx code.
   - **Mock Dependencies:** Mock external dependencies in effects to isolate testing.

5. **Debugging Async Operations:**
   - **Async Troubleshooting:** When debugging asynchronous operations in effects, utilize tools like `rxjs` operators (`tap`, `catchError`, etc.) to log and troubleshoot.

6. **Understanding Action Flow:**
   - **Visualizing Action Flow:** Use tools like `ngrx/store-devtools` or custom logging to visualize the flow of actions and state changes in your application.

7. **Error Handling:**
   - **Graceful Error Handling:** Implement graceful error handling in effects and reducers to prevent the application from crashing due to unexpected issues.

8. **NgRx Schematics:**
   - **Use NgRx Schematics:** Leverage the NgRx schematics for generating boilerplate code. It ensures consistency and adherence to best practices.

By incorporating these best practices and tips into your ngRx development workflow, you can create a more maintainable, scalable, and debuggable state management solution for your Angular application.

## 5. Alternatives to ngRx

While ngRx is a popular choice for state management in Angular applications, there are several alternatives available. Let's take a look at some of the popular alternatives to ngRx.

- **[Akita](https://opensource.salesforce.com/akita/)**
- **[NGXS](https://www.ngxs.io/)**
- **[ReactiveX](http://reactivex.io/)**
- **[Redux](https://redux.js.org/)**
- **[RxAngular State](https://www.rx-angular.io/docs/state)**
- **[Elf](https://ngneat.github.io/elf/)**
- **[StateAdapt](https://state-adapt.github.io/angular)**
- No Explicit State Management at all
