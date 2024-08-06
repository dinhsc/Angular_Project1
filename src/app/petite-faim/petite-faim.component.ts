import { Component } from '@angular/core';
import { PetiteFaim } from '../class/PetiteFaim';
import { Router } from '@angular/router';
import { FritesSaucesService } from '../frites-sauces/frites-sauces.service';
import { PetiteFaimService } from './petite-faim.service';

@Component({
  selector: 'app-petite-faim',
  templateUrl: './petite-faim.component.html',
  styleUrl: './petite-faim.component.css'
})
export class PetiteFaimComponent {

  petiteList: PetiteFaim[] = [];

  constructor(
    private router: Router,
    private petiteService: PetiteFaimService,
  ) { }

  ngOnInit() {
    this.petiteList = this.petiteService.getPetiteFaimList();
  }

  showDetails(id: number){
    const selectedPetiteFaim = this.petiteList.find(petite => petite.id == id);
    if (selectedPetiteFaim) {
      this.router.navigate(['/petite-faim', id]);
    } 
  }
  
}
