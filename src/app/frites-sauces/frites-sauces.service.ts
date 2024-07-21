import { Injectable } from '@angular/core';
import { FriteSauce } from '../class/Frites&Sauces';
import { FRITES_DATA } from './data_frite_sauce_list';

@Injectable({
  providedIn: 'root'
})
export class FritesSaucesService {

  constructor() { }

  getFritesList(): FriteSauce[] {
    return FRITES_DATA;
  }
}
