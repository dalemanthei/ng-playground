import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { AnimationComponent } from './animation/animation.component';

const routes: Routes = [
  {path: 'animation', component: AnimationComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'searchbox', component: SearchboxComponent},
  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
