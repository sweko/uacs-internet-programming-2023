# Class 15: Angular Directives and Pipes

## Agenda

### Angular Directives:

- **Structural Directives:**
  - Revisit key structural directives like `ngIf` and `ngFor`.
  - Understand how structural directives alter the DOM structure based on conditions.

- **Attribute Directives:**
  - Review attribute directives such as `ngStyle` and `ngClass`.
  - Explore how attribute directives dynamically modify the appearance or behavior of HTML elements.

- **Custom Directives:**
  - Recap the concept of creating custom directives for specific functionality.
  - Discuss scenarios where custom directives can enhance code modularity and reusability.

### Angular Pipes:

- **Built-in Pipes:**
  - Provide an overview of built-in pipes like `date`, `currency`, and `uppercase`.
  - Demonstrate how built-in pipes simplify data formatting in Angular templates.

- **Chaining Pipes:**
  - Understand how to chain multiple pipes for sequential data transformations.
  - Explore scenarios where chaining pipes is beneficial for achieving desired outputs.

- **Custom Pipes:**
  - Introduce the concept of creating custom pipes.
  - Demonstrate the process of building a custom pipe for specific data transformation needs.

## Angular Directives

Angular directives are an integral part of building dynamic and interactive user interfaces. They extend HTML with new attributes or elements, allowing developers to create reusable components and add behavior to elements. Here's a recap of key points related to Angular directives:

1. **Structural Directives:**
   - Structural directives like `ngIf` and `ngFor` enable developers to conditionally render or repeat elements in the DOM based on certain conditions.
   - They use the asterisk (*) syntax in the HTML to indicate that they alter the structure of the DOM.

2. **Attribute Directives:**
   - Attribute directives, such as `ngStyle` and `ngClass`, dynamically change the appearance or behavior of an element by manipulating its attributes.
   - They are applied to elements as regular HTML attributes.

3. **Custom Directives:**
   - Developers can create custom directives to encapsulate and reuse specific behavior across components.
   - Directives are an essential tool for enhancing the modularity and reusability of Angular applications.

### Structural Directives

Structural directives are used to add or remove elements from the DOM based on certain conditions. They are prefixed with an asterisk (*) in the HTML to indicate that they alter the structure of the DOM. Here's an example of the `ngIf` structural directive:

```html
<div *ngIf="user">
  <h1>Welcome, {{ user.name }}!</h1>
</div>
```

The `ngIf` directive will render the `<div>` element and its contents only if the `user` property is truthy. Otherwise, it will remove the element from the DOM. The `ngFor` directive is another example of a structural directive:

```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

The `ngFor` directive will repeat the `<li>` element for each item in the `items` array. The `item` variable will be assigned to the current item in the array during each iteration. Structural directives can also be used to render multiple elements in the DOM. For example, the following code will render the `<div>` element and its contents if the `user` property is truthy, and the `<p>` element and its contents if the `user` property is falsy:

```html
<div *ngIf="user; else noUser">
  <h1>Welcome, {{ user.name }}!</h1>
</div>

<ng-template #noUser>
  <p>Please log in to continue.</p>
</ng-template>
```

The `ng-template` element is used to define a template that can be referenced by other elements. In this case, the `noUser` template is referenced by the `else` clause of the `ngIf` directive. The `noUser` template will be rendered if the `user` property is falsy.

In general, development of an angular application does not require the creation of custom structural directives. However, it is important to understand how structural directives work in order to use them properly.

### Attribute Directives

Attribute directives are used to dynamically change the appearance or behavior of an element by manipulating its attributes. They are applied to elements as regular HTML attributes. Here's an example of the `ngStyle` attribute directive:

```html
<!-- app.component.html -->

<div [ngStyle]="{ 'font-size': fontSize + 'px', 'color': fontColor }">
  This text dynamically adjusts its style using ngStyle.
</div>

<div [ngClass]="{ 'highlight': isHighlighted, 'underline': isUnderlined }">
  This text dynamically adjusts its class using ngClass.
</div>
```

```css
/* app.component.css */

.highlight {
  background-color: yellow;
}

.underline {
  text-decoration: underline;
}
```

```typescript
// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fontSize: number = 16;
  fontColor: string = 'black';
  isHighlighted: boolean = false;
  isUnderlined: boolean = false;

  // Function to toggle highlighting
  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  // Function to toggle underlining
  toggleUnderline() {
    this.isUnderlined = !this.isUnderlined;
  }
}
```

In this example:

- The `ngStyle` directive is used to dynamically set the font size and color of the first `<div>`
- The `ngClass` directive is used to dynamically apply the 'highlight' and 'underline' classes to the second `<div>`
- The styles for the `'highlight'` and `'underline'` classes are defined in the `app.component.css` file
- The component's TypeScript file (`app.component.ts`) includes properties and functions to control the dynamic behavior of the styles and classes.

### Custom Directives

Custom directives are used to encapsulate and reuse specific behavior across components. They are an essential tool for enhancing the modularity and reusability of Angular applications. Here's an example of a custom directive that can be used to highlight an element when the user hovers over it:

```typescript
import { Component } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() hlColor: string = 'yellow';
  @Input() hlClass: string = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.hlColor, this.hlClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null, null);
  }

  private highlight(color: string, cssClass: string) {
    this.el.nativeElement.style.backgroundColor = color;
    if (cssClass) {
      this.el.nativeElement.classList.add(cssClass);
    } else {
      this.el.nativeElement.classList.remove(cssClass);
    }
  }
}
```

```html
<!-- app.component.html -->

<div appHighlight>
  This text will be highlighted when the user hovers over it.
</div>

<div appHighlight [highlightColor]="'red'">
  This text will be highlighted in red when the user hovers over it.
</div>

<div appHighlight [highlightColor]="'blue'" [highlightClass]="'underline'">
  This text will be highlighted in blue and underlined when the user hovers over it.
</div>
```

```css
/* app.component.css */
.highlight {
  background-color: yellow;
}

.underline {
  text-decoration: underline;
}
```

In this example:

- The `@Directive` decorator is used to define the `HighlightDirective` class as a custom directive.
- The `@Input` decorator is used to define the `hlColor` and `hlClass` properties as inputs to the directive.
- The `@HostListener` decorator is used to define the `onMouseEnter` and `onMouseLeave` event handlers.
- The `highlight()` function is used to apply the specified color and class to the element when the user hovers over it.
- The `appHighlight` directive is applied to the first `<div>` element without any inputs.
- The `appHighlight` directive is applied to the second `<div>` element with the `highlightColor` input set to `'red'`.
- The `appHighlight` directive is applied to the third `<div>` element with the `highlightColor` input set to `'blue'` and the `highlightClass` input set to `'underline'`.

## Angular Pipes

### What are pipes in Angular

Pipes are a useful feature in Angular that allow us to transform data in our templates before displaying it to the user. They are similar to filters in AngularJS (Angular 1) and filters in Vue.js. Pipes are a great way to keep our components lean and focused on their primary responsibilities. They also help us avoid repeating the same data transformation logic in multiple components. Angular provides a number of built-in pipes for common data transformations, and we can also create custom pipes for specific data transformation needs.

### Built-in Pipes

Angular provides a number of built-in pipes for common data transformations. Here are some examples of built-in pipes:

```html
<!-- app.component.html -->

<p>Today's date is {{ now }}</p>
<p>Today's date is {{ now | date }}</p>
<p>Today's date is {{ now | date:'shortDate' }}</p>
<p>Today's date is {{ now | date:'short' }}</p>
<p>Today's date is {{ now | date:'MM/dd/yyyy' }}</p>
<p>Today's time is {{ now | date:'shortTime' }}</p>
```

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  now: Date = new Date();
}
```

In this example:

- The `now` property is defined as a `Date` object in the component's TypeScript file.
- The `now` property is referenced in the component's HTML template using the `{{ now }}` syntax.
- The `now` property is passed to the `date` pipe using the `{{ now | date }}` syntax.
- The `date` pipe is used to format the `now` property in different ways.

### Chaining Pipes

Pipes can be chained together to perform sequential data transformations. Here's an example of chaining the `uppercase` and `date` pipes:

```html
<!-- app.component.html -->

<p>Today's date is {{ now | date:'shortDate' | uppercase }}</p>
```

In this example:

- The `now` property is passed to the `date` pipe using the `{{ now | date:'shortDate' }}` syntax.
- The `date` pipe is used to format the `now` property as a short date.
- The `uppercase` pipe is used to convert the output of the `date` pipe to uppercase.

So, in essence, the `uppercase` pipe is applied to the output of the `date` pipe. This is an important concept to understand when chaining pipes, as this creates a pipeline of data transformations.

### Custom Pipes

Custom pipes can be created for specific data transformation needs. What we need to do is to implement the `PipeTransform` interface and define the `transform()` function. Additionally, we need to decorate the class with the `@Pipe` decorator and specify the pipe name. Here's an example of a custom pipe that will transform an array of strings:

```typescript
// custom-join.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customJoin'
})
export class CustomJoinPipe implements PipeTransform {
  transform(value: string[], separator: string = ', '): string {
    if (!value || !Array.isArray(value)) return '';
    return value.join(separator);
  }
}
```

```html
<!-- app.component.html -->

<p>Original Array: {{ originalArray }}</p>
<p>Joined String: {{ originalArray | customJoin }}</p>
<p>Joined String with Custom Separator: {{ originalArray | customJoin:' | ' }}</p>
```

When the component is rendered, the original array of strings will be transformed into a joined string, both with the default separator and a custom separator.

Custom pipes like this can be handy for encapsulating specific array manipulation logic and enhancing the reusability of your Angular application components.