import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { SecondnavbarComponent } from './secondnavbar/secondnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    SecondnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
