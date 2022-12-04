import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MoviesModule } from './movies/movies.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent, 
    children: [
      { path: '', redirectTo: 'user' },
      { path: 'user', loadChildren: () => UserModule },
      { path: 'movies', loadChildren: () => MoviesModule }
    ]

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
