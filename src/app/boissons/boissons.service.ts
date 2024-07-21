import { Injectable } from '@angular/core';
import { BOISSONS_DATA } from './data_boissons_list';
import { Boissons } from '../class/Boissons';

@Injectable({
  providedIn: 'root'
})
export class BoissonsService {

  constructor() { }

  getBoissonsList(): Boissons[] {
    return BOISSONS_DATA;
  }
}
