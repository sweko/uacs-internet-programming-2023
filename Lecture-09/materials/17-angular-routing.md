# Class 17: Implementing Routing in Angular

## Learning Objectives

By the end of this class, you should be able to:

1. Configure routes and navigation in an Angular application.
2. Use child routes to organize and structure your application.
3. Implement route guards for securing routes.
4. Understand and implement lazy loading for modules.
5. Handle route parameters effectively.

## 1. Configuring Routes and Navigation

### 1.1 Setting Up Routes

- Define routes in the Angular application.
- Configure the RouterModule to recognize these routes.

In Angular, setting up routes involves defining the routes in the application and configuring the RouterModule to recognize and handle these routes.

#### 1.1.1 Define Routes in the Angular Application
Routes in Angular are typically defined in a dedicated module, often referred to as the "routing module." This module is responsible for specifying the mapping between URLs and the corresponding components.

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // Additional routes can be added here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

In this example:

- We import the `RouterModule` and the `Routes` type from `@angular/router`.
- We import the components (`HomeComponent` and `AboutComponent`) that correspond to our routes.
- We define an array of route objects, each having a `path` and the corresponding `component`.
- The `RouterModule.forRoot(routes)` configures the router with the provided routes.

#### 1.1.2 Configure the RouterModule
Now that we have defined our routes, we need to ensure that the `RouterModule` is properly configured in the main `AppModule`.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    // Additional components go here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

In this example:

- We import the `AppRoutingModule` and include it in the imports array of the `AppModule`.
- This makes the routes defined in the `AppRoutingModule` available throughout the application.
- With these configurations, you've set up the basic routing structure in your Angular application. Users can now navigate to the home page (`/`) and the about page (`/about`).

### 1.2 Creating Navigation Links

- Build navigation links to navigate between different views.
- Understand the role of the RouterLink directive.

In this section, we'll focus on building navigation links to facilitate navigation between different views in your Angular application. We'll also explore the role of the `RouterLink` directive in creating these links.

#### 1.2.1 Building Navigation Links
Navigation links are essential for allowing users to move between various sections or views within your Angular application. These links are typically created in the template files associated with your components.

Let's consider an example where we have a navigation bar component that includes links to the home and about pages:

```html
<!-- navigation-bar.component.html -->
<nav>
  <ul>
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/about">About</a></li>
    <!-- Additional navigation links can be added here -->
  </ul>
</nav>
```

In this example:

- We use the `routerLink` directive to define the target route for each navigation link.
- The value of `routerLink` corresponds to the path defined in the route configuration.

#### 1.2.2 Understanding the Role of RouterLink

The `RouterLink` directive is a key player in Angular's routing mechanism. It is used to create links that navigate to a specific route when clicked. Here's a brief overview:

```html
<!-- app.component.html -->

<!-- Example of using RouterLink in a template -->
<p>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
</p>

<!-- Example of using RouterLink in combination with *ngFor -->
<ul>
  <li *ngFor="let link of navLinks">
    <a [routerLink]="link.path">{{ link.label }}</a>
  </li>
</ul>
```

In this example:

- The `[routerLink]` binding is used to dynamically set the route based on the values in the `navLinks` array.
- The `routerLink` directive simplifies the process of creating links and ensures that navigation is handled properly by the Angular router.

By utilizing the `RouterLink` directive, you can easily create navigation links that seamlessly integrate with Angular's routing system.

### 1.3. Navigating Programmatically

- Learn how to navigate programmatically using the Angular Router service.
- Explore different navigation methods and their use cases.

In Angular, navigating between different views can be accomplished programmatically using the Angular Router service. This functionality allows you to initiate navigation based on events, user interactions, or application logic. Below, we'll explore how to navigate programmatically and discuss the diverse methods provided by the Router service.

#### 1.3.1. Navigating with the Router Service

The Angular `Router` service provides several methods for programmatic navigation. You can inject this service into components or services to manage navigation events.

```typescript
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-example',
  template: `
    <button (click)="navigateToHome()">Go to Home</button>
  `,
})
export class ExampleComponent {
  constructor(private router: Router) {}

  navigateToHome(): void {
    // Programmatically navigate to the home route
    this.router.navigate(['/']);
  }

  navigateToAboutPage() {
    // Programmatically navigate to the about route
    this.router.navigate(['/about']);
  }
}
```

In this example:

- We inject the `Router` service into the component's constructor.
- We use the `navigate()` method to navigate to the home route (`/`).
- We use the `navigate()` method to navigate to the about route (`/about`).

#### 1.3.2. Understanding the Router Service Methods

The `Router` service provides several methods for programmatic navigation. Here's a brief overview:

- `navigate()` - Navigates to a specific route based on the provided URL.
- `navigateByUrl()` - Navigates to a specific route based on the provided URL string.

```typescript
// Navigate to the home route
this.router.navigate(['/']);

// Navigate to the about route
this.router.navigate(['/about']);

// Navigate to the home route
this.router.navigateByUrl('/');

// Navigate to the about route
this.router.navigateByUrl('/about');
```

- `navigate()` and `navigateByUrl()` are similar in functionality, but `navigate()` is preferred for most use cases.

- `navigate()` is preferred because it allows you to pass an array of route segments, which is more robust and less error-prone than passing a URL string.

- `navigate()` also allows you to pass an object containing query parameters and/or a fragment.

```typescript

// Navigate to the home route with query parameters
this.router.navigate(['/'], { queryParams: { id: 1 } });

// Navigate to the about route with a fragment
this.router.navigate(['/about'], { fragment: 'section-1' });
```

## 2. Using Child Routes for Organization

Child routes in Angular provide a powerful way to organize and structure your application by creating nested routes within a parent route. This hierarchical arrangement is particularly useful for managing complex applications with multiple views or features.

### Benefits of Using Child Routes

1. **Modularity:** Child routes allow you to modularize your application by breaking it into smaller, manageable components. Each child route can represent a specific feature or section of your application.

2. **Code Organization:** By organizing routes hierarchically, you can keep related components and functionality together. This improves code readability and maintainability.

3. **Nested Navigation:** Child routes enable nested navigation, meaning that components within a child route can have their own routes. This facilitates a structured and intuitive navigation flow for users.

### Configuring Child Routes

To implement child routes, you need to define them within the route configuration of a parent route. Here's an example of setting up child routes:

```typescript
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'stats', component: StatsComponent },
      // Other child routes...
    ],
  },
  // Other routes...
];
```


## 3. Route Guards and Security

### 3.1 Introduction to Route Guards

Route guards in Angular are mechanisms that allow you to control the navigation process, securing and controlling access to certain routes. They provide a way to execute logic before or after navigation, enabling you to make decisions based on specific conditions.

#### Understanding Route Guards

Route guards are essential for implementing security measures, ensuring that users have the necessary permissions to access certain parts of your application. They intercept navigation requests and can perform tasks like authentication, authorization, or preventing navigation altogether.

#### Types of Route Guards

1. CanActivate

The `CanActivate` route guard is used to determine if a user is allowed to activate a particular route. It is often employed for implementing authentication checks before allowing access to a protected route.

2. CanDeactivate

The `CanDeactivate` route guard is responsible for determining if a user can deactivate the current route. This guard is useful when you want to confirm with the user before leaving a form or a page with unsaved changes.

3. CanLoad

The `CanLoad` route guard prevents the asynchronous loading of feature modules until a certain condition is met. This is particularly useful for optimizing the initial loading time of your application by loading modules on-demand.

4. Resolve

The `Resolve` route guard is used to perform data fetching operations before the route is activated. This ensures that the required data is available before the route is rendered, preventing any flickering or delays in displaying content.

5. CanActivateChild

The `CanActivateChild` route guard is similar to `CanActivate` but specifically applies to child routes. It allows you to enforce access controls for child routes within a parent route.

Route guards are an integral part of Angular's navigation system, providing developers with a powerful toolset to manage and control the flow of the application based on specific conditions.

### 3.2 Implementing CanActivate

In Angular, the `CanActivate` route guard is a powerful tool for securing routes and controlling access based on specific conditions. By implementing this guard, you can ensure that users are authorized to access certain parts of your application.

#### Securing Routes with CanActivate

The primary purpose of the `CanActivate` route guard is to prevent navigation to a route if a certain condition is not met. This condition is usually related to authentication, ensuring that only authenticated users can access protected routes.

To implement the `CanActivate` route guard, you need to create a service or a class that implements the `CanActivate` interface. This interface requires the implementation of a `canActivate` method, where you can place your logic for determining whether the route can be activated.

Here's a basic example:

```typescript
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      // Redirect to the login page if not authenticated
      this.router.navigate(['/login']);
      return false;
    }
  }
}
```

In this example, the `canActivate` method checks if the user is authenticated using an `AuthService`. If authenticated, it allows the navigation to proceed; otherwise, it redirects the user to the login page.

#### Using CanActivate in Route Configuration
To apply the CanActivate route guard to a specific route, you need to include it in the route configuration. Here's an example:

```typescript
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  // Other routes...
];
```

### 3.3 Handling CanDeactivate

In Angular, the `CanDeactivate` route guard is employed to control whether a user is allowed to leave a route. This is particularly useful when you want to prompt users with confirmation dialogs or perform certain checks before they navigate away from a page. 

## 3.3.1 Implementing CanDeactivate

To implement the `CanDeactivate` route guard, you need to create a service or a class that implements the `CanDeactivate` interface. This interface requires the implementation of a `canDeactivate` method, where you can place your logic for determining whether the user can leave the route.

Here's a basic example:

```typescript
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean> | Promise<boolean>;
}

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate>
{
  canDeactivate(
    component: CanComponentDeactivate
  ): boolean | Observable<boolean> | Promise<boolean> {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
```

In this example, `CanComponentDeactivate` is an interface that components implement, and `canDeactivate` is a method within that interface. The `CanDeactivateGuard` then checks whether the component has this method and calls it to decide whether navigation can proceed.

One common use case for CanDeactivate is to prompt users with confirmation dialogs before they navigate away from a page. You can utilize Angular's Window.confirm method or a custom dialog service for this purpose.

Here's a simple example using Window.confirm:
  
```typescript
export class YourComponent implements CanComponentDeactivate {
  // ...

  canDeactivate(): boolean {
    return window.confirm('Do you really want to leave?');
  }
}
```

## 3.3.2 Using CanDeactivate in Route Configuration

To apply the `CanDeactivate` route guard to a specific route, you need to include it in the route configuration. Here's an example:

```typescript
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  // Other routes...
];
```

## 4. Lazy Loading Modules

### 4.1 Why Lazy Loading?

Lazy loading is a crucial optimization technique in Angular that involves loading parts of an application on-demand, rather than loading everything upfront when the application is initially loaded. This approach provides several benefits for improving application performance and user experience.

Improving Application Performance:
1. Faster Initial Load Time - Lazy loading helps reduce the initial load time of your application by loading only the essential modules required for the current view. This is particularly beneficial for larger applications with numerous features, as users can access the core functionality faster.
2. Reduced Bundle Size - By splitting your application into smaller, more focused modules, lazy loading allows you to create smaller bundles. This results in faster downloads for users, especially those on slower network connections or using mobile devices.
3. Optimal Resource Utilization - Lazy loading optimizes resource utilization by loading only the components, services, and assets needed for a specific route or feature. Unnecessary code is deferred until it is required, saving memory and improving overall application efficiency.

Scenarios Where Lazy Loading is Most Effective:

1. Large Applications with Multiple Features - In large applications with various features, lazy loading helps manage the complexity by loading only the components and modules necessary for the current user interaction. This ensures that users aren't overwhelmed with unnecessary code upfront.

2. Enterprise-Level Applications - Enterprise-level applications often have extensive functionality. Lazy loading is particularly effective in such scenarios, allowing different teams to work on separate modules independently. This promotes better code organization and maintainability.

3. Improved User Experience - For applications with multiple views or pages, lazy loading enables faster transitions between different sections. Users experience quicker load times when navigating to different routes, contributing to a smoother and more responsive user experience.

4. Optimizing Mobile Applications - Lazy loading is especially beneficial for mobile applications, where bandwidth and device resources are limited. By loading only the necessary components, mobile users can experience faster load times and reduced data consumption.

Lazy loading is a valuable strategy in Angular for optimizing application performance, reducing initial load times, and enhancing the user experience. Understanding when and where to apply lazy loading is essential for building scalable and efficient Angular applications.

### 4.2 Implementing Lazy Loading

Lazy loading in Angular involves deferring the loading of certain modules until they are actually needed. This is achieved by configuring the application to load modules asynchronously. Below, we'll discuss how to implement lazy loading and update the application structure accordingly.

#### 4.2.1 Configuring Lazy Loading

To configure lazy loading in Angular, you need to adjust the route configuration in your application. Instead of importing the module directly, you provide a path to the module file and use the `loadChildren` property to specify the module to load lazily.

Here's an example:

```typescript
// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule) },
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

In this example, the `loadChildren` property takes a function that uses the `import()` function to dynamically import the module when the route is activated.

#### 4.2.2 Updating Application Structure
To support lazy-loaded modules, you need to organize your project structure accordingly. Each feature or section that can be lazily loaded should have its own module.

Here's a simplified example structure:

```
src/
|-- app/
|   |-- app-routing.module.ts
|   |-- app.component.ts
|   |-- app.module.ts
|
|-- home/
|   |-- home-routing.module.ts
|   |-- home.component.ts
|   |-- home.module.ts
|
|-- dashboard/
|   |-- dashboard-routing.module.ts
|   |-- dashboard.component.ts
|   |-- dashboard.module.ts
|
|-- ...
```

Each feature module (`HomeModule`, `DashboardModule`, etc.) should have its own routing module, defining the routes specific to that feature.

## 5. Handling Route Parameters

### 5.1 Sending Route Parameters

In Angular, passing and retrieving route parameters is a common practice for dynamically customizing views or components based on user input. This section covers how to send parameters in the route URL and access them in the destination component.

#### 5.1.1 Passing Parameters in the Route URL

To send parameters in the route URL, you can define them in the route configuration. Parameters are specified using a colon (`:`) followed by the parameter name.

```typescript
// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: 'products/:id', component: ProductDetailComponent },
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

In this example, the :id in the route path indicates a parameter named "id."

#### 5.1.2 Accessing Parameters in the Destination Component
To access route parameters in the destination component, you use the `ActivatedRoute` service from `@angular/router`. You can subscribe to the `params` observable to react to changes in route parameters.

```typescript
// product-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.params.subscribe(params => {
      // Access the 'id' parameter
      this.productId = params['id'];
    });
  }
}
```

In this example, the `ActivatedRoute` service is injected into the component, and the `params` observable is subscribed to in the `ngOnInit` lifecycle hook. This allows you to react to changes in route parameters and update the component accordingly.

### 5.2 Optional and Query Parameters

In Angular, optional parameters and query parameters provide flexibility in defining routes and passing additional information. This section explores how to work with optional parameters and query parameters in Angular routes.

#### 5.2.1 Optional Parameters in Routes

Optional parameters are parameters that may or may not be present in the route URL. They are defined in the route configuration using parentheses.

```typescript
// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'users/:id', component: UserProfileComponent },
  { path: 'users/:id/:details', component: UserProfileComponent },
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

In this example, the `:details` in the route path is an optional parameter. The route can match both `'users/1'` and `'users/1/some-details'`.

To access optional parameters in the destination component, use the `ActivatedRoute` service similar to mandatory parameters. You can subscribe to the `params` observable and check for the existence of optional parameters.

```ts
// user-profile.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userId: string;
  details: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.params.subscribe(params => {
      // Access the mandatory 'id' parameter
      this.userId = params['id'];

      // Check for the optional 'details' parameter
      this.details = params['details'] || 'default-details';
    });
  }
}
```

In this example, the `details` parameter is optional, and the component sets a default value if it is not present.

#### 5.2.2 Query Parameters
Query parameters are another way to pass data to a route. They are appended to the URL after a question mark (`?`) and separated by ampersands (`&`).

```ts
// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: 'search', component: SearchResultsComponent },
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

In this example, the `search` route can accept query parameters like `'search?query=angular&category=web'`.

To access query parameters, use the `queryParams` observable from the `ActivatedRoute` service.

```ts
// search-results.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  query: string;
  category: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Subscribe to query parameter changes
    this.route.queryParams.subscribe(params => {
      this.query = params['query'];
      this.category = params['category'];
    });
  }
}
```

In this example, the `queryParams` observable is used to access the query parameters.


## Resources

- [Angular Routing Documentation](https://angular.dev/guide/routing)
- [Lazy Loading in Angular](https://angular.dev/guide/ngmodules/lazy-loading)

