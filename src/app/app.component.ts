import { Component } from '@angular/core';

// Decorator goes above the class signature
// Decorator is a function in which we pass an object ({})
@Component({
  selector: 'pm-root',
  // Template defines the HTML that we want to display in this component
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
      <li><a class='nav-link' routerLink='/products'>Product List</a></li>
    </ul>
  </nav>
  <div class='container'>
    <!-- router-outlet identifies where to display the routed component's view. -->
    <!-- This is usually specified in the host component's template. -->
    <router-outlet></router-outlet>
  </div>
  `
}) // no semi-colon
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
