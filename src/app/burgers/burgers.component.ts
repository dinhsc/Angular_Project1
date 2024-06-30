import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BURGERS_DATA } from './data-burgers-list';
import { BurgersService } from './burgers.service';
import { Burger } from '../class/Burger';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrl: './burgers.component.css'
})
export class BurgersComponent implements OnInit {
  
  burgersList: Burger[] = [];

  constructor(
    private router: Router,
    private burgerService: BurgersService,
  ) { }

  ngOnInit() {
    this.burgersList = this.burgerService.getBurgerList();
  }
  
  showDetails(id: number){
    const selectedBurger = this.burgersList.find(burger => burger.id == id);
    if (selectedBurger) {
      this.router.navigate(['/burgers', id]);
    } 
  }
}
