import { Injectable } from '@angular/core';
import { PETITE_DATA } from './data_petite_faim_list';
import { PetiteFaim } from '../class/PetiteFaim';

@Injectable({
  providedIn: 'root'
})
export class PetiteFaimService {

  constructor() { }

  getPetiteFaimList(): PetiteFaim[] {
    return PETITE_DATA;
  }
}
