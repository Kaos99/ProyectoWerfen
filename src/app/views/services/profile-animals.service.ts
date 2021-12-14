import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { get as _get } from 'lodash';
import { IAnimal } from '../models/profile-animal';

@Injectable({
  providedIn: 'root'
})
export class ProfileAnimalsService {

  constructor(private http: HttpClient) { }

  getProfileDog(): Observable<IAnimal> {
    return this.http.get(environment.API_URL + environment.ENDPOINTS.PERFIL_PERROS);
  }

  getProfileCat(): Observable<IAnimal> {
    return this.http.get(environment.API_URL + environment.ENDPOINTS.PERFIL_GATOS);
  }

  getProfileChicken(): Observable<IAnimal> {
    return this.http.get(environment.API_URL + environment.ENDPOINTS.PERFIL_GALLINAS);
  }

  getProfileDuck(): Observable<IAnimal> {
    return this.http.get(environment.API_URL + environment.ENDPOINTS.PERFIL_PATOS);
  }

  getProfileCetaceo(): Observable<IAnimal> {
    return this.http.get(environment.API_URL + environment.ENDPOINTS.PERFIL_CETACEOS);
  }

  getProfilePinnipedos(): Observable<IAnimal> {
    return this.http.get(environment.API_URL + environment.ENDPOINTS.PERFIL_PINNIPEDOS);
  }

  getProfilePaquidermos(): Observable<IAnimal> {
    return this.http.get(environment.API_URL + environment.ENDPOINTS.PERFIL_PAQUIDERMOS);
  }
  
  getProfileAves(): Observable<IAnimal> {
    return this.http.get(environment.API_URL + environment.ENDPOINTS.PERFIL_AVES);
  }

  getProfileInsectos(): Observable<IAnimal> {
    return this.http.get(environment.API_URL + environment.ENDPOINTS.PERFIL_INSECTOS);
  }

  getProfileMamiferos(): Observable<IAnimal> {
    return this.http.get(environment.API_URL + environment.ENDPOINTS.PERFIL_MAMIFEROS);
  }

}
