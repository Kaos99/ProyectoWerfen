import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { INamesMenuHeader } from '../models/menu';
import { environment } from 'src/environments/environment';
import { get as _get } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ItemsLinkService {

  constructor(private http: HttpClient) { }

  getItemsHeader(): Observable<INamesMenuHeader[]> {
    return this.http.get(environment.API_URL + environment.ENDPOINTS.LINKS_HEADER).pipe(
      catchError(() => of({})),
      switchMap((response: any) => of(_get(response, 'data', []))),
      take(1)
    );
  }
}
