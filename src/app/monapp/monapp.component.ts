import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monapp',
  templateUrl: './monapp.component.html',
  styleUrl: './monapp.component.css'
})

export class MonappComponent {

  constructor(private router: Router) { }

  signIn() {
    this.router.navigate(['/login']);
  }

  show_menus(){
    this.router.navigate(['/menus']);
  }
  show_burgers(){
    this.router.navigate(['/burgers']);
  }
}
