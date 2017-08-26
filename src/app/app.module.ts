import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
// import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { GiphyService } from './searchbox/giphy.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdToolbarModule
} from '@angular/material';
import { AnimationComponent } from './animation/animation.component';
import { FormsComponent } from './forms/forms.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AnimationComponent,
    AppComponent,
    SearchboxComponent,
    FormsComponent,
    LoginFormComponent
  ],
  imports: [
    // StoreModule.provideStore({ /* reducers here */ })
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdToolbarModule,
    ReactiveFormsModule
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
