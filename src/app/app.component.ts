import { Component } from '@angular/core';

// Decorator goes above the class signature
// Decorator is a function in which we pass an object ({})
@Component({
  selector: 'pm-root',
  // Template defines the HTML that we want to display in this component
  template: `
  <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `
}) // no semi-colon
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
