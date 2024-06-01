import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monapp',
  templateUrl: './monapp.component.html',
  styleUrl: './monapp.component.css'
})

export class MonappComponent {

  constructor(private router: Router) { }
  
  menusDetails() {

  }

  signIn() {
    this.router.navigate(['/login']);
  }

  show_burgers() {
    this.router.navigate(['/burgers']);
    console.log("OK");
  }
}
