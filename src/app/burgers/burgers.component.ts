import { Component } from '@angular/core';
import { Burger } from '../class/Burger';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrl: './burgers.component.css'
})
export class BurgersComponent {

  burgersList: Burger[] = [
    { id: 0, name: "Le Big Mac", price: 10.5, description: "Un c...", imagePath: "../../assets/img/bic_mac.jpg" },
    { id: 1, name: "Royal Deluxe", price: 8.75, description: "Pour ...", imagePath: "../../assets/img/deluxe.jpg" },
    { id: 2, name: "Royal Bacon", price: 9.25, description: "Un b...", imagePath: "../../assets/img/bacon.jpg" },
    { id: 3, name: "Tasty Bacon", price: 9.0, description: "Savo...", imagePath: "../../assets/img/tasty.jpg" },
    { id: 4, name: "Royal Cheese", price: 8.5, description: "Le R...", imagePath: "../../assets/img/cheese.jpg" },
    { id: 5, name: "Cheeseburger", price: 7.0, description: "Un b...", imagePath: "../../assets/img/cheeseburger.jpg" },
    { id: 6, name: "McFish", price: 6.5, description: "Pour ...", imagePath: "../../assets/img/mcfish.jpg" },
    { id: 7, name: "McCrispy", price: 8.0, description: "Décou...", imagePath: "../../assets/img/crispy.jpg" },
  ]



  constructor(private router: Router) { }
  
  showDetails(id: number){
    const selectedBurger = this.burgersList.find(burger => burger.id == id);
    if (selectedBurger) {
      this.router.navigate(['/burgers', id]);
    } 
  }
}
