import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { INamesMenuHeader } from '../../models/menu';
import { ItemsLinkService } from '../../services/items-link.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  itemsHeader: INamesMenuHeader[] = [];
  @ViewChild('pass',{static: true}) inputPass: ElementRef | any;

  constructor(public ItemsLinkService: ItemsLinkService, public router: Router) { }

  ngOnInit(): void {
    this.getItemsHeader();
  }

  getItemsHeader() {
    this.ItemsLinkService.getItemsHeader().subscribe(
      (response: INamesMenuHeader[]) => {
        return this.itemsHeader = response;
      });
  }

  btnAcceder() {
    this.router.navigateByUrl('/authorized');
  }

}
