import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monapp',
  templateUrl: './monapp.component.html',
  styleUrl: './monapp.component.css'
})

export class MonappComponent {

  constructor(private router: Router) { }

  // VERSION FACTORISE
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  /********VERSION NAIVE********\
  signIn() {
    this.router.navigate(['/login']);
  }

  show_menus(){
    this.router.navigate(['/menus']);
  }

  show_burgers(){
    this.router.navigate(['/burgers']);
  }

  show_petite_faim() {
    this.router.navigate(['/petite-faim']);
  }

  show_boissons(){
    this.router.navigate(['/boissons']);
  }
  
  show_frites_sauces(){
    this.router.navigate(['/frites-sauces']);
  }

  show_dessert(){
    this.router.navigate(['/dessert']);
  }
  */

}
