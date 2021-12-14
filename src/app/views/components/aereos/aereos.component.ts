import { Component, OnInit } from '@angular/core';
import { INamesMenuViews } from '../../models/menu-views';
import { ItemsMenuService } from '../../services/items-menu.service';

@Component({
  selector: 'app-aereos',
  templateUrl: './aereos.component.html',
  styleUrls: ['./aereos.component.sass']
})
export class AereosComponent implements OnInit {
  itemsNameMenuAereo: INamesMenuViews[] = [];

  constructor(public itemsMenuAereos: ItemsMenuService) { }

  ngOnInit(): void {
    this.getItemsMenuAereos();
  }

  getItemsMenuAereos() {
    this.itemsMenuAereos.getItemsMenuAereos().subscribe(
      (response: INamesMenuViews[]) => {
        return this.itemsNameMenuAereo = response;
      });
  }

}
