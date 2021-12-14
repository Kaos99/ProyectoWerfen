import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { INamesMenuViews } from '../models/menu-views';
import { environment } from 'src/environments/environment';
import { get as _get } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ItemsMenuService {

  constructor(private http: HttpClient) { }

  getItemsMenuTerrestres(): Observable<INamesMenuViews[]> {
    return this.http.get(environment.API_URL + environment.ENDPOINTS.LINKS_MENU_TERRESTRES).pipe(
      catchError(() => of({})),
      switchMap((response: any) => of(_get(response, 'data', []))),
      take(1)
    );
  }

  getItemsMenuAereos(): Observable<INamesMenuViews[]> {
    return this.http.get(environment.API_URL + environment.ENDPOINTS.LINKS_MENU_AEREOS).pipe(
      catchError(() => of({})),
      switchMap((response: any) => of(_get(response, 'data', []))),
      take(1)
    );
  }

  getItemsMenuAcuaticos(): Observable<INamesMenuViews[]> {
    return this.http.get(environment.API_URL + environment.ENDPOINTS.LINKS_MENU_ACUATICOS).pipe(
      catchError(() => of({})),
      switchMap((response: any) => of(_get(response, 'data', []))),
      take(1)
    );
  }
}