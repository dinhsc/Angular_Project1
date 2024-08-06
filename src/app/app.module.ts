import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MonappComponent } from './monapp/monapp.component';
import { LoginComponent } from './login/login.component';
import { BurgersComponent } from './burgers/burgers.component';
import { DetailBurgerComponent } from './detail-burger/detail-burger.component';
import { MenusComponent } from './menus/menus.component';
import { BorderCardDirective } from './border-card.directive';
import { PetiteFaimComponent } from './petite-faim/petite-faim.component';
import { BoissonsComponent } from './boissons/boissons.component';
import { FritesSaucesComponent } from './frites-sauces/frites-sauces.component';
import { DessertComponent } from './dessert/dessert.component';
import { DetailMenusComponent } from './detail-menus/detail-menus.component';
import { DetailFaimComponent } from './detail-faim/detail-faim.component';
import { DetailBoissonsComponent } from './detail-boissons/detail-boissons.component';
import { DetailFritesComponent } from './detail-frites/detail-frites.component';
import { DetailDessertComponent } from './detail-dessert/detail-dessert.component';

@NgModule({
  declarations: [
    AppComponent,
    MonappComponent,
    LoginComponent,
    BurgersComponent,
    DetailBurgerComponent,
    MenusComponent,
    BorderCardDirective,
    PetiteFaimComponent,
    BoissonsComponent,
    FritesSaucesComponent,
    DessertComponent,
    DetailMenusComponent,
    DetailFaimComponent,
    DetailBoissonsComponent,
    DetailFritesComponent,
    DetailDessertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
