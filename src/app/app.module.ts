import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';

@NgModule({
  // directives, components and pipes declared in this app
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  // directives, components and pipes from Angular itself, or from external sources (e.g. third-party libraries)
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // Can specify a list of app routes here.
    // Order matters - router uses first match wins strategy when matching routes.
    // More specific routes should come before the less specific routes (e.g. wildcard goes at the bottom)
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
     ProductModule
  ],
  // bootstrap array should only be used in the root application module (i.e. AppModule)
  bootstrap: [AppComponent]
})
export class AppModule { }
