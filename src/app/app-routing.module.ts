import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { AnimationComponent } from './animation/animation.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  { path: 'animation', component: AnimationComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'searchbox', component: SearchboxComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
