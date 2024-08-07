import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonappComponent } from './monapp/monapp.component';
import { LoginComponent } from './login/login.component';
import { BurgersComponent } from './burgers/burgers.component';
import { DetailBurgerComponent } from './detail-burger/detail-burger.component';
import { MenusComponent } from './menus/menus.component';
import { PetiteFaimComponent } from './petite-faim/petite-faim.component';
import { BoissonsComponent } from './boissons/boissons.component';
import { FritesSaucesComponent } from './frites-sauces/frites-sauces.component';
import { DessertComponent } from './dessert/dessert.component';
import { DetailMenusComponent } from './detail-menus/detail-menus.component';
import { DetailFaimComponent } from './detail-faim/detail-faim.component';
import { DetailBoissonsComponent } from './detail-boissons/detail-boissons.component';
import { DetailFritesComponent } from './detail-frites/detail-frites.component';
import { DetailDessertComponent } from './detail-dessert/detail-dessert.component';

const routes: Routes = [
  { path: 'accueil', component: MonappComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'menus/:index', component: DetailMenusComponent },
  { path: 'burgers', component: BurgersComponent },
  { path: 'burgers/:index', component: DetailBurgerComponent },
  { path: 'petite-faim', component: PetiteFaimComponent },
  { path: 'petite-faim/:index', component: DetailFaimComponent },
  { path: 'boissons', component: BoissonsComponent }, 
  { path: 'boissons/:index', component: DetailBoissonsComponent }, 
  { path: 'frites-sauces', component: FritesSaucesComponent },
  { path: 'frites-sauces/:index', component: DetailFritesComponent },
  { path: 'dessert', component: DessertComponent },
  { path: 'dessert/:index', component: DetailDessertComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
