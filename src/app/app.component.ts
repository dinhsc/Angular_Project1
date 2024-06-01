import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce';

  constructor(private router: Router) { }

  home() {
    console.log("Retour");
  }

  signIn() {
    this.router.navigate(['/login']);
  }
}
