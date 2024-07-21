import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FriteSauce } from '../class/Frites&Sauces';
import { FritesSaucesService } from './frites-sauces.service';

@Component({
  selector: 'app-frites-sauces',
  templateUrl: './frites-sauces.component.html',
  styleUrl: './frites-sauces.component.css'
})
export class FritesSaucesComponent {

  fritesList: FriteSauce[] = [];

  constructor(
    private router: Router,
    private fritesServices: FritesSaucesService,
  ) { }

  ngOnInit() {
    this.fritesList = this.fritesServices.getFritesList();
  }

}
