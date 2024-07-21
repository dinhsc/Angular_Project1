import { Injectable } from '@angular/core';
import { DESSERT_DATA } from './data_dessert_list';
import { Dessert } from '../class/Dessert';

@Injectable({
  providedIn: 'root'
})
export class DessertService {

  constructor() { }

  getDessertList(): Dessert[] {
    return DESSERT_DATA
  }
}
