import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupGuard } from '../core/guards/signup.guard';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
// import { AuthModule } from './auth.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component: AuthLayoutComponent, children: [
    {path: 'signin', component: SigninComponent},
    {path: 'signup', canDeactivate: [SignupGuard], component: SignupComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
