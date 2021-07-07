import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import routing components by bk
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  //routing by bk
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
	{ path: 'Login', component: LoginComponent },
	{ path: 'Register', component: RegisterComponent },
	{ path: 'About', component: AboutComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ HomeComponent, LoginComponent, RegisterComponent, AboutComponent ];