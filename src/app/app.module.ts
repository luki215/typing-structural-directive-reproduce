import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ExampleDirective} from './example.directive';
import {ExampleGenericDirective} from './example-generic.directive';
@NgModule({
  declarations: [
    AppComponent,
    ExampleDirective,
    ExampleGenericDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
