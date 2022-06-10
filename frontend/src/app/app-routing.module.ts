import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';

const routes: Routes = [
  // { path: ':userId', component: HomeViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeViewComponent },
  { path: 'home', component: HomeViewComponent },
  { path: '**', component: NotFoundViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
