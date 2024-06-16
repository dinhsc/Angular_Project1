import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonappComponent } from './monapp/monapp.component';
import { LoginComponent } from './login/login.component';
import { BurgersComponent } from './burgers/burgers.component';
import { DetailBurgerComponent } from './detail-burger/detail-burger.component';
import { MenusComponent } from './menus/menus.component';

const routes: Routes = [
  { path: 'accueil', component: MonappComponent },
  { path: 'login', component: LoginComponent },
  { path: 'burgers', component: BurgersComponent },
  { path: 'burgers/:index', component: DetailBurgerComponent },
  { path: 'menus', component: MenusComponent },
  //{ path: 'menus/:index', component: MonappComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
