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
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import { FormsComponent } from './forms/forms.component';
import { LoginFormComponent } from './login-form/login-form.component';
@NgModule({
  declarations: [
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
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
