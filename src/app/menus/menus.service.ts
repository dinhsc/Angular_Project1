import { Injectable } from '@angular/core';
import { MENUS_DATA } from './data-menus-list';
import { Menus } from '../class/Menus';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }

  getMenusList(): Menus[] {
    return MENUS_DATA;
  }
}
