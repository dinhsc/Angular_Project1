import { Injectable } from '@angular/core';
import { Burger } from '../class/Burger';
import { BURGERS_DATA } from './data-burgers-list';

@Injectable({
  providedIn: 'root'
})
export class BurgersService {

  constructor() { }
  
  getBurgerList(): Burger[] {
    return BURGERS_DATA;
  }
}
