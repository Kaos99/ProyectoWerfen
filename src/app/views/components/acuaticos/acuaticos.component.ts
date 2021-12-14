import { Component, OnInit } from '@angular/core';
import { INamesMenuViews } from '../../models/menu-views';
import { ItemsMenuService } from '../../services/items-menu.service';

@Component({
  selector: 'app-acuaticos',
  templateUrl: './acuaticos.component.html',
  styleUrls: ['./acuaticos.component.sass']
})
export class AcuaticosComponent implements OnInit {
  itemsNameMenuAcuatico: INamesMenuViews[] = [];

  constructor(public itemsMenuAcuaticos: ItemsMenuService) { }

  ngOnInit(): void {
    this.getItemsMenuAcuaticos();
  }

  getItemsMenuAcuaticos() {
    this.itemsMenuAcuaticos.getItemsMenuAcuaticos().subscribe(
      (response: INamesMenuViews[]) => {
        return this.itemsNameMenuAcuatico = response;
      });
  }
}
