import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownDirective } from './dropdown.directive';
import { ColorChangeDirective } from './color-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    ColorChangeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
