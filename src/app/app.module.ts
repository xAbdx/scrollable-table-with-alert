import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ScrollDirectiveDirective } from './scroll-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    ScrollDirectiveDirective,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
