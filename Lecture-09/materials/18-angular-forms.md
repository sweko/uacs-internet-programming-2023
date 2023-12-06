## Class 18: Forms in Angular

This class focuses on working with forms in Angular, covering the two main approaches: Template-Driven Forms and Reactive Forms. Additionally, it delves into form controls, validation, and the essential task of handling form submissions.

### 18.1 Template-Driven vs. Reactive Forms

#### 18.1.1 Template-Driven Forms

Template-Driven Forms in Angular rely on directives in the template to create and manipulate the underlying form model. These forms are ideal for simple scenarios where the logic is mainly handled in the template itself.

#### 18.1.2 Reactive Forms

Reactive Forms, on the other hand, use a more programmatic approach. They involve creating and managing the form controls and validation logic in the component code. Reactive Forms are recommended for complex forms and scenarios requiring dynamic behavior.

### 18.2 Form Controls and Validation

#### 18.2.1 Form Controls

Form controls are the building blocks of forms in Angular. Understanding how to create and manage form controls is crucial for both Template-Driven and Reactive Forms. This section covers the various types of form controls and how to integrate them into your forms.

#### 18.2.2 Validation

Angular provides a robust validation mechanism for forms. Learn how to implement built-in validators, create custom validators, and display validation messages to users. Validation is essential for ensuring data integrity and a positive user experience.

### 18.3 Handling Form Submissions

Submitting forms is a critical aspect of web applications. This section explores how to handle form submissions in Angular. Whether you're working with HTTP requests, saving data to a database, or performing other actions based on the form input, understanding the submission process is vital.

### Goal

By the end of this class, you will have a comprehensive understanding of both Template-Driven and Reactive Forms in 
Angular, along with the ability to implement form controls, validation, and handle form submissions effectively.

## Template-driven forms

### Understanding Template-Driven Forms

Template-Driven Forms are driven by the template itself, making them an excellent choice for simpler forms with less complex logic. In this approach, the form structure is defined in the HTML template, and Angular automatically creates and manages the underlying form model. Directives such as `ngForm`, `ngModel`, and others play a pivotal role in binding form controls and managing user input.

### Creating Forms with ngForm

The `ngForm` directive is a fundamental building block for Template-Driven Forms. It is used to create an Angular form and enables the use of other directives to manage form controls. Here's a basic example:

```html
<form #myForm="ngForm" (ngSubmit)="onSubmit()">
  <!-- Form controls go here -->
</form>
```

In this example, `#myForm="ngForm"` creates a reference to the form, allowing you to access its properties and methods in the component.

### ngModel for Two-Way Data Binding
The `ngModel` directive facilitates two-way data binding, connecting form controls to properties in the component. This enables real-time synchronization between the form and the component. For instance:

```html
<input type="text" name="username" [(ngModel)]="user.username">
```

In this example, changes in the input field are automatically reflected in the `user.username` property and vice versa.

### Form Validation in Template-Driven Forms
Template-Driven Forms provide built-in validation features using directives such as `ngModel` and `ngForm`. You can apply CSS classes, check for control validity, and display validation messages dynamically in the template.

```html
<input type="email" name="email" [(ngModel)]="user.email" required email #email="ngModel">
<div *ngIf="email.invalid && (email.dirty || email.touched)" class="error-message">
  <div *ngIf="email.errors.required">Email is required.</div>
  <div *ngIf="email.errors.email">Invalid email format.</div>
</div>
```

### Working with ngFor for Dynamic Forms
In scenarios where you have dynamic forms with varying numbers of form controls, the `ngFor` directive becomes valuable. It allows you to iterate over form controls and dynamically generate the corresponding HTML.

```html
<div *ngFor="let field of formFields">
  <label>{{ field.label }}</label>
  <input [type]="field.type" [name]="field.name" [(ngModel)]="field.value" [required]="field.required">
</div>
```

In this example, `formFields` is an array of objects representing different form controls, and `ngFor` is used to dynamically create the corresponding input elements

## Reactive forms

### Understanding Reactive Forms

Reactive Forms provide a more code-centric approach to form development in Angular. Instead of relying on directives in the template, Reactive Forms involve creating form controls and handling their behavior programmatically within the component. This approach is particularly powerful for complex forms and scenarios requiring dynamic form control manipulation.

### Form Building Blocks: AbstractControl and FormGroup

In Reactive Forms, form controls are instances of the `AbstractControl` class. Controls can be grouped together using the `FormGroup` class, forming a hierarchical structure that mirrors the form's layout.

```typescript
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// ...

// Creating a FormGroup with form controls
this.myForm = this.formBuilder.group({
  username: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  // Other form controls...
});
```

In this example, `myForm` is a `FormGroup` instance containing two form controls: `username` and `email`. The `FormBuilder` class is used to create the form group and form controls.

### FormControl for Individual Controls
The `FormControl` class represents a single form control, such as an input field. You can create instances of `FormControl` to manage the state and behavior of individual controls.

```ts
import { FormControl, Validators } from '@angular/forms';

// ...

// Creating a FormControl
this.usernameControl = new FormControl('', Validators.required);
```

In this example, `usernameControl` is an instance of `FormControl` with an initial value of `''` and a required validator.

### Dynamic Form Control Creation
Reactive Forms excel in scenarios where form controls need to be dynamically created or manipulated based on user interactions or other conditions. You can dynamically add or remove controls from a FormGroup as needed.

```ts
// Adding a form control dynamically
this.myForm.addControl('password', new FormControl('', Validators.required));

// Removing a form control dynamically
this.myForm.removeControl('password');
```

In this example, a new form control named `password` is added to `myForm` dynamically. Similarly, you can remove form controls using the `removeControl()` method.

### Form Validation in Reactive Forms

Reactive Forms provide a robust validation mechanism using the `Validators` class. You can apply built-in validators such as `required`, `minLength`, and `email` to form controls. Additionally, you can create custom validators to implement more complex validation logic.

```ts
// Applying built-in validators
this.usernameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
this.emailControl = new FormControl('', [Validators.required, Validators.email]);

// Creating a custom validator
function validatePassword(control: AbstractControl) {
  if (control.value.length < 8) {
    return { passwordTooShort: true };
  }
  return null;
}

this.passwordControl = new FormControl('', validatePassword);
```

In this example, `usernameControl` and `emailControl` have built-in validators applied to them. `passwordControl` has a custom validator named `validatePassword()`.

### Form Submission in Reactive Forms

Reactive Forms provide a straightforward way to handle form submissions. You can subscribe to the `valueChanges` observable of a `FormGroup` to get notified whenever the form value changes. This allows you to execute custom logic when the user submits the form.

```ts

// Subscribing to form value changes
this.myForm.valueChanges.subscribe((value) => {
  // Execute custom logic
});
```

In this example, `myForm` is a `FormGroup` instance, and the `valueChanges` observable is used to subscribe to form value changes.

#### Handling Form Submissions

Form submissions are a critical aspect of web applications. In Angular, you can handle form submissions using the `ngSubmit` event or the `submit()` method of the `FormGroup` class. This section explores how to implement form submissions in Angular.

- Using the ngSubmit Event

The `ngSubmit` event is fired when a user submits a form. You can use this event to execute custom logic when the form is submitted.

```html

<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  <!-- Form controls go here -->
</form>

```

In this example, the `ngSubmit` event is used to execute the `onSubmit()` method when the form is submitted.

- Using the submit() Method

The `submit()` method of the `FormGroup` class can be used to submit a form programmatically. This is useful in scenarios where you need to submit a form based on user interactions or other conditions.

```ts

// Submitting a form programmatically
this.myForm.submit();

```

In this example, the `submit()` method is used to submit the form programmatically.

- Preventing Default Form Behavior

By default, submitting a form reloads the page. You can prevent this behavior by calling the `preventDefault()` method of the `Event` class.

```ts

// Preventing default form behavior
onSubmit(event: Event) {
  event.preventDefault();
  // Execute custom logic
}

```

In this example, the `preventDefault()` method is used to prevent the default form behavior.

### Template Usage of Reactive Form

To integrate the Reactive Form into your template, you can use Angular's form directives to bind form controls and display validation messages. Here's an example:

```html
<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  <label for="username">Username:</label>
  <input type="text" id="username" formControlName="username">

  <label for="email">Email:</label>
  <input type="email" id="email" formControlName="email">

  <!-- Other form controls... -->

  <button type="submit" [disabled]="myForm.invalid">Submit</button>
</form>
```

In this example, the `[formGroup]` directive binds the `myForm` FormGroup to the `<form>` element, and the `formControlName` directive connects each input field to its corresponding form control within the FormGroup. The `(ngSubmit)` event handler is triggered when the form is submitted.

## Resources

- [Angular Forms Overview](https://angular.dev/guide/forms)
- [Template-Driven Forms](https://angular.io/guide/forms)
- [Reactive Forms](https://angular.dev/guide/forms/template-driven-forms)