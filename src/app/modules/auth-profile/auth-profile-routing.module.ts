import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthProfileComponent } from './auth-profile.component';
import { AuthGuard } from './_services/auth.guard';

const routes: Routes = [{
  path: '',
  component: AuthProfileComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path:'registro',
      //canActivate: [AuthGuard],
      component: RegisterComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthProfileRoutingModule { }
