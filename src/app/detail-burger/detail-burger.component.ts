import { Component } from '@angular/core';
import { Burger } from '../class/Burger';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-burger',
  templateUrl: './detail-burger.component.html',
  styleUrl: './detail-burger.component.css'
})
export class DetailBurgerComponent {

  burgersList: Burger[] = [
    { id: 0, name: "Big Mac", price: 10.5, description: "Le Big Mac™ est LE burger culte de McDonald’s, disponible dans de nombreux pays du monde ! Il a traversé les années et reste un indétrônable des burgers McDo™. Le secret de ce burger ? La simplicité de ses ingrédients, ses deux étages de saveurs, et bien entendu une sauce reconnaissable entre mille !", imagePath: "../../assets/img/bic_mac.jpg" },
    { id: 1, name: "Royal Deluxe", price: 8.75, description: "Pour ...", imagePath: "../../assets/img/deluxe.jpg" },
    { id: 2, name: "Royal Bacon", price: 9.25, description: "Un b...", imagePath: "../../assets/img/bacon.jpg" },
    { id: 3, name: "Tasty Bacon", price: 9.0, description: "Savo...", imagePath: "../../assets/img/tasty.jpg" },
    { id: 4, name: "Royal Cheese", price: 8.5, description: "Le R...", imagePath: "../../assets/img/cheese.jpg" },
    { id: 5, name: "Cheeseburger", price: 7.0, description: "Un b...", imagePath: "../../assets/img/cheeseburger.jpg" },
    { id: 6, name: "McFish", price: 6.5, description: "Pour ...", imagePath: "../../assets/img/mcfish.jpg" },
    { id: 7, name: "McCrispy", price: 8.0, description: "Décou...", imagePath: "../../assets/img/crispy.jpg" },
  ]
  
  burger: Burger | undefined;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    const burgerIndex: string|null = this.route.snapshot.paramMap.get('index');
    if(burgerIndex !== null) {
      const index = parseInt(burgerIndex, 10);
      this.burger = this.burgersList[index];
    }
  }

  // public gfg = true;

  isCollapsed: { [section: string]: boolean } = {
    ingredients: true,
    allergenes: true,
    nutriscore: true
  };

  // Méthode pour basculer l'état du collapse
  toggleCollapse(section: string) {
    // Inverser l'état du collapse pour la section spécifiée
    this.isCollapsed[section] = !this.isCollapsed[section];
  }

}
