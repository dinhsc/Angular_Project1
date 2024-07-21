import { Component } from '@angular/core';
import { Menus } from '../class/Menus';
import { Router } from '@angular/router';
import { MenusService } from './menus.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent {

  menusList: Menus[] = [];

  constructor(
    private router: Router,
    private menusService: MenusService,
  
  ) { }

  ngOnInit() {
    this.menusList = this.menusService.getMenusList();
  }
  
  showDetails(id: number){
    const selectedMenus = this.menusList.find(menus => menus.id == id);
    if (selectedMenus) {
      console.log("OK");
      this.router.navigate(['/menus', id]);
    } 
  }
}
