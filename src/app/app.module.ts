import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  // directives and components declared in this app
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  // directives and components from Angular itself, or from other sources (e.g. third-party libraries)
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
