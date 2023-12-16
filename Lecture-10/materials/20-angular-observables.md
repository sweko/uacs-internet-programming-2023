# Observables in Angular

## Class Overview

In the second part of the class, we will shift our focus to the practical application of observables in Angular. Participants will learn how to use observables with Angular's `HttpClient` module for handling HTTP requests and with the Angular router for managing route-based observables.

### 1. **Introduction to HttpClient and HTTP Observables**

   - Overview of the `HttpClient` module for making HTTP requests.
   - Making GET, POST, PUT, and DELETE requests with observables.
   - Handling responses and errors with observables in the context of HTTP requests.

### 2. **Route Observables in Angular**

   - Understanding observables in the Angular router.
   - Using route observables to react to route changes.
   - Extracting route parameters and query parameters using observables.

### 3. **Using Observables in Angular**
   
   - Using observables with Angular forms.
   - Using observables with Angular services.
   - Using observables with Angular pipes.

## 1. Introduction to HttpClient and HTTP Observables

### 1.1 Overview of the `HttpClient` Module

The `HttpClient` module is a powerful utility in Angular for making HTTP requests. It simplifies the process of communicating with a server and handling responses. Here's an overview of its key features:

- **Centralized Configuration:** `HttpClient` provides a central place for configuring options such as base URL, headers, and request/response transformations.

- **Observable-Based:** HTTP requests in Angular are inherently asynchronous, and `HttpClient` leverages observables to handle asynchronous data streams efficiently.

- **Interceptors:** Interceptors allow you to intercept and modify HTTP requests or responses globally. This is useful for tasks such as adding headers, handling errors, or transforming data.

### 1.2 Making HTTP Requests with Observables

#### 1.2.1 Making a GET Request:

The `HttpClient` module provides a `get()` method for making GET requests. The `get()` method returns an observable that emits the response body as a JSON object. Here's an example of making a GET request:

```typescript
import { HttpClient } from '@angular/common/http';

// Inject HttpClient in the constructor
constructor(private http: HttpClient) {}

// Making a GET request
this.http.get('https://api.example.com/data').subscribe(
  data => {
    // Handle successful response
    console.log('GET Request successful:', data);
  },
  error => {
    // Handle error
    console.error('Error in GET request:', error);
  }
);
```

This code snippet demonstrates making a simple GET request using `HttpClient` and handling the response and errors with observables.

#### 1.2.2 Making a POST Request:

The `HttpClient` module provides a `post()` method for making POST requests. The `post()` method returns an observable that emits the response body as a JSON object. Here's an example of making a POST request:

```typescript
import { HttpClient } from '@angular/common/http';

// Inject HttpClient in the constructor
constructor(private http: HttpClient) {}

// Making a POST request

// Create a data object to send in the request body
const data = {
  name: 'John Doe',
  email: 'email@example.com'
};

// Make the POST request
this.http.post('https://api.example.com/data', data).subscribe(
  responseData => {
    // Handle successful response
    console.log('POST Request successful:', responseData);
  },
  error => {
    // Handle error
    console.error('Error in POST request:', error);
  }
);
```

This code snippet demonstrates making a simple POST request using `HttpClient` and handling the response and errors with observables. Note that the `post()` method takes two arguments: the URL and the data to send in the request body. The data is automatically serialized as JSON. Making a PUT or DELETE request is similar to making a POST request. The `HttpClient` module provides `put()` and `delete()` methods for making PUT and DELETE requests respectively.

## 2. Route Observables in Angular

### 2.1 Understanding Observables in the Angular Router

The Angular router provides a number of observables that can be used to react to route changes. These observables are available in the `ActivatedRoute` service. Here's an overview of the key observables:

- **`params` Observable:** This observable emits a new value whenever the route parameters change. The emitted value is an object containing the route parameters.

- **`queryParams` Observable:** This observable emits a new value whenever the query parameters change. The emitted value is an object containing the query parameters.

- **`fragment` Observable:** This observable emits a new value whenever the fragment identifier changes. The emitted value is a string containing the fragment identifier.

- **`data` Observable:** This observable emits a new value whenever the route data changes. The emitted value is an object containing the route data.

- **`paramMap` Observable:** This observable emits a new value whenever the route parameters change. The emitted value is an object containing the route parameters and query parameters.

- **`queryParamMap` Observable:** This observable emits a new value whenever the query parameters change. The emitted value is an object containing the query parameters and route parameters.

### 2.2 Using Route Observables to React to Route Changes

The `ActivatedRoute` service provides a number of observables that can be used to react to route changes. Here's an example of using the `params` observable to react to route changes:

```typescript

import { ActivatedRoute } from '@angular/router';

// Inject ActivatedRoute in the constructor
constructor(private route: ActivatedRoute) {}

// Using the params observable
this.route.params.subscribe(
  params => {
    // Handle route parameter change
    console.log('Route parameter changed:', params);
  }
);
```

This code snippet demonstrates using the `params` observable to react to route changes. The `params` observable emits a new value whenever the route parameters change. The emitted value is an object containing the route parameters. The `params` observable is useful for tasks such as fetching data from a server based on the route parameters.

## 3. Using Observables with Angular

### 3.1 Using Observables with Forms

#### 3.1.1 Using Observables to React to Form Changes

Angular provides a number of observables that can be used to react to form changes. These observables are available in the `FormControl` class. Here's an overview of the key observables:

- **`valueChanges` Observable:** This observable emits a new value whenever the form control value changes. The emitted value is the new value of the form control.

- **`statusChanges` Observable:** This observable emits a new value whenever the form control status changes. The emitted value is the new status of the form control.

#### 3.1.2 Using Observables to Validate Form Inputs

The `FormControl` class provides a number of observables that can be used to validate form inputs. Here's an example of using the `valueChanges` observable to validate a form input:

```typescript

import { FormControl } from '@angular/forms';

// Create a form control

const nameControl = new FormControl('', [
  Validators.required,
  Validators.minLength(3),
  Validators.maxLength(20)
]);

// Using the valueChanges observable

nameControl.valueChanges.subscribe(
  value => {
    // Validate the form input
    console.log('Form input changed:', value);
  }
);
```

This code snippet demonstrates using the `valueChanges` observable to validate a form input. The `valueChanges` observable emits a new value whenever the form control value changes. The emitted value is the new value of the form control. The `valueChanges` observable is useful for tasks such as validating form inputs.

#### 3.1.3 Using Observables to Submit Forms

The `FormControl` class provides a number of observables that can be used to submit forms. Here's an example of using the `statusChanges` observable to submit a form:

```typescript

import { FormControl } from '@angular/forms';

// Create a form control

const nameControl = new FormControl('', [
  Validators.required,
  Validators.minLength(3),
  Validators.maxLength(20)
]);

// Using the statusChanges observable

nameControl.statusChanges.subscribe(
  status => {
    // Submit the form
    console.log('Form status changed:', status);
  }
);
```

This code snippet demonstrates using the `statusChanges` observable to submit a form. The `statusChanges` observable emits a new value whenever the form control status changes. The emitted value is the new status of the form control. The `statusChanges` observable is useful for tasks such as submitting forms.

### 3.2. Using Observables with Services

#### 3.2.1. Subject Overview

In RxJS, a `Subject` is a type of observable that allows for both the consumption and production of values. It serves as a bridge or proxy between the Observable and Observer. The key characteristic of a `Subject` is that it can multicast, meaning it can have multiple subscribers, and it will broadcast the same set of values to all of them.

How to Use Subjects in Angular:

```typescript
// Import Subject from RxJS
import { Subject } from 'rxjs';

// Create a Subject
const subject = new Subject();

// Subscribe to the Subject
subject.subscribe(
  value => {
    // Handle emitted value
    console.log('Subject emitted:', value);
  }
);

// Emit a value
subject.next('Hello World!');
```
#### 3.2.2. Example Usage in Angular Service

Let's say you have a service that needs to notify multiple components when a certain event occurs. You can use a Subject for this purpose.

```typescript
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject = new Subject<string>();

  // Observable to subscribe to for receiving notifications
  public notification$ = this.notificationSubject.asObservable();

  // Method to send a notification
  sendNotification(message: string) {
    this.notificationSubject.next(message);
  }
}
```

In this example, the `NotificationService` has a private `Subject` named `notificationSubject`. It also exposes an observable `notification$` that components can subscribe to. The `sendNotification` method allows other parts of the application to send notifications.

A component that is subscribing to notifications will look like:

```typescript
import { Component, OnDestroy } from '@angular/core';
import { NotificationService } from './notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  template: '<p>{{ notification }}</p>',
})
export class NotificationComponent implements OnDestroy {
  notification: string;
  private subscription: Subscription;

  constructor(private notificationService: NotificationService) {
    // Subscribe to the notification service
    this.subscription = this.notificationService.notification$.subscribe(message => {
      this.notification = message;
    });
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    this.subscription.unsubscribe();
  }
}
```

In this component, we subscribe to the `notification$` observable provided by the `NotificationService`. When a notification is sent, the component receives the value and updates its UI.

Using `Subject` is a powerful pattern in Angular for building communication channels between different parts of your application, especially when you need to broadcast events or data to multiple subscribers.

### 3.3. Using Observables with Angular Pipes

The `AsyncPipe` is a built-in pipe that simplifies the handling of asynchronous operations, particularly with Observables and Promises. It automatically subscribes to an asynchronous data source, such as an Observable or a Promise, and updates the view whenever new data is emitted or resolved. The `AsyncPipe` eliminates the need for manual subscription management and helps avoid potential memory leaks.

#### 3.3.1 Key Features of the AsyncPipe:

1. **Automatic Subscription**: The `AsyncPipe` subscribes to the provided Observable or Promise and automatically manages the subscription lifecycle.

2. **Automatic Unsubscription**: When the component is destroyed or the asynchronous operation completes, the `AsyncPipe` automatically unsubscribes to prevent memory leaks.

3. **Automatic Change Detection**: The `AsyncPipe` triggers Angular's change detection mechanism, ensuring that the view is updated whenever new data is emitted or resolved.

#### 3.3.2 How to Use the AsyncPipe:
1. Using with Observables:

```html
<div>{{ observableData$ | async }}</div>
```

In this example, `observableData$` is an `Observable` in the component, and the `AsyncPipe` automatically subscribes to it, updating the view whenever new values are emitted.

2. Using with Promises:

```html
<div>{{ promiseData$ | async }}</div>
```
If `promiseData$` is a `Promise` in the component, the `AsyncPipe` automatically resolves the promise and updates the view when the promise is fulfilled.

#### 3.3 Example Usage:
Let's consider a simple component that uses the AsyncPipe with an Observable retrieved from a service.

Component:
```typescript
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  template: '<div>{{ data$ | async }}</div>',
})
export class DataComponent implements OnInit {
  data$: Observable<string>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Assume getData returns an Observable<string> from a service
    this.data$ = this.dataService.getData();
  }
}
```

Service:
```typescript
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getData(): Observable<string> {
    // Simulating an asynchronous operation
    return of('Async Data').pipe(delay(1000));
  }
}
```

In this example, the `DataComponent` subscribes to the `data$` Observable from the `DataService` using the `AsyncPipe`. The view automatically updates when the asynchronous operation completes.

Using the `AsyncPipe` simplifies the code by handling subscriptions and unsubscriptions automatically, promoting a more reactive and declarative programming style in Angular applications.