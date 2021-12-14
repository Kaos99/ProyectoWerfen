import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { INamesMenuViews } from '../../models/menu-views';
import { ItemsMenuService } from '../../services/items-menu.service';

@Component({
  selector: 'app-terrestres',
  templateUrl: './terrestres.component.html',
  styleUrls: ['./terrestres.component.sass']
})
export class TerrestresComponent implements OnInit {
  itemsNameMenuTerrestre: INamesMenuViews[] = [];
  tipoParent: any;

  constructor(public itemsMenuTerrestre: ItemsMenuService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getItemsMenuTerrestres();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.tipoParent = params.get('tipo');
      console.log(this.tipoParent);
    });
  }


  getItemsMenuTerrestres() {
    this.itemsMenuTerrestre.getItemsMenuTerrestres().subscribe(
      (response: INamesMenuViews[]) => {
        return this.itemsNameMenuTerrestre = response;
      });
  }

}
