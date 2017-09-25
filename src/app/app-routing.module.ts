import { D3Component } from './d3/d3.component';
import { FormsComponent } from './forms/forms.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchboxComponent } from './searchbox/searchbox.component';

const routes: Routes = [
  { path: 'forms', component: FormsComponent },
  { path: 'searchbox', component: SearchboxComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'd3', component: D3Component },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
