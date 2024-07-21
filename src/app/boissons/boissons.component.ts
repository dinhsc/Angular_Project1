import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BoissonsService } from './boissons.service';
import { Boissons } from '../class/Boissons';

@Component({
  selector: 'app-boissons',
  templateUrl: './boissons.component.html',
  styleUrl: './boissons.component.css'
})
export class BoissonsComponent {

  boissonsList: Boissons[] = [];

  constructor(
    private router: Router,
    private boissonsServices: BoissonsService,

  ) { }

  ngOnInit() {
    this.boissonsList = this.boissonsServices.getBoissonsList();
  }
  
}
