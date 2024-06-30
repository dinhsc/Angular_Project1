import { Component } from '@angular/core';
import { Burger } from '../class/Burger';
import { ActivatedRoute } from '@angular/router';
import { BURGERS_DATA } from '../burgers/data-burgers-list';

@Component({
  selector: 'app-detail-burger',
  templateUrl: './detail-burger.component.html',
  styleUrl: './detail-burger.component.css'
})
export class DetailBurgerComponent {

  burgersList = BURGERS_DATA
  
  burger: Burger | undefined;
  isModalOpen: boolean = false

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

  orderModal(id : number) {
    console.log("ORDER", id);
    this.isModalOpen = true;
    console.log(this.isModalOpen);
  }

  closeModal(){
    this.isModalOpen = false;
  }

}
