// Use Flowbite via WebPack
import 'flowbite';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    NotFoundViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
