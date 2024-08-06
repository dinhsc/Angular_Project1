import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DessertService } from './dessert.service';
import { Dessert } from '../class/Dessert';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrl: './dessert.component.css'
})
export class DessertComponent {

  dessertList: Dessert[] = [];

  constructor(
    private router: Router,
    private dessertService: DessertService,
  ) { }

  ngOnInit() {
    this.dessertList = this.dessertService.getDessertList();
  }

  showDetails(id: number){
    const selectedDessert = this.dessertList.find(dessert => dessert.id == id);
    if (selectedDessert) {
      this.router.navigate(['/dessert', id]);
    } 
  }
}
