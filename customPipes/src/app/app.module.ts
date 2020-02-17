import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizePipe } from './capitalize.pipe';
import { SquarePipe } from './square.pipe';
import { StrTrimPipe } from './str-trim.pipe';
import { ReverseStrPipe } from './reverse-str.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    SquarePipe,
    StrTrimPipe,
    ReverseStrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
