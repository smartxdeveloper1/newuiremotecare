import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from './header/header.component'
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
        path: 'dashboard', component: HeaderComponent, 
        children: [
          { path: 'home', component: HomeComponent },
          { path: 'about', component: AboutComponent },
          
        ]
      },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }