import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IAnimal } from '../../models/profile-animal';
import { ProfileAnimalsService } from '../../services/profile-animals.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import {Toast} from 'bootstrap'

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.sass']
})
export class AnimalComponent implements OnInit {
  tipo: any;
  dataAnimal: IAnimal = {};
  profileAnimal: FormGroup = new FormGroup({});
  show: boolean = false;

  constructor(private route: ActivatedRoute, public profileAnimals: ProfileAnimalsService, private location: Location) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.tipo = params.get('tipo');
    });
    this.viewProfileAnimal();
    this.initFormProfileAnimal();
  }

  viewProfileAnimal() {
    switch(this.tipo) {
      case 'perros': {
        this.getInformationDog();
        break;
      }
      case 'gatos': {
        this.getInformationCat();
        break;
      }
      case 'gallinas': {
        this.getInformationChicken();
        break;
      }
      case 'patos': {
        this.getInformationDucks();
        break;
      }
      case 'cetaceos': {
        this.getInformationCetaceos();
        break;
      }
      case 'pinnipedos': {
        this.getInformationPinnipedos();
        break;
      }
      case 'paquidermos': {
        this.getInformationPaquidermos();
        break;
      }
      case 'aves': {
        this.getInformationAves();
        break;
      }
      case 'insectos': {
        this.getInformationInsectos();
        break;
      }
      case 'mamiferos': {
        this.getInformationMamiferos();
        break;
      }
    }
  }

  initFormProfileAnimal() {
    this.profileAnimal = new FormGroup({
      especie: new FormControl(),
      raza: new FormControl(),
      features: new FormControl(),
      information: new FormControl()
    })
  }

  setValuesDataProfileAnimal(data: IAnimal){
    this.profileAnimal.setValue({
      especie: data.especie,
      raza: data.razas,
      features: '',
      information: ''
    })
  }

  goBack(): void {
    this.location.back();
  }


  getInformationDog() {
    this.profileAnimals.getProfileDog().subscribe(
      (response: IAnimal) => {
        this.setValuesDataProfileAnimal(response);
        return this.dataAnimal = response;
      });
  }

  getInformationCat() {
    this.profileAnimals.getProfileCat().subscribe(
      (response: IAnimal) => {
        this.setValuesDataProfileAnimal(response);
        return this.dataAnimal = response;
      });
  }

  getInformationChicken() {
    this.profileAnimals.getProfileChicken().subscribe(
      (response: IAnimal) => {
        this.setValuesDataProfileAnimal(response);
        return this.dataAnimal = response;
      });    
  }

  getInformationDucks() {
    this.profileAnimals.getProfileDuck().subscribe(
      (response: IAnimal) => {
        this.setValuesDataProfileAnimal(response);
        return this.dataAnimal = response;
      });    
  }

  getInformationCetaceos() {
    this.profileAnimals.getProfileCetaceo().subscribe(
      (response: IAnimal) => {
        this.setValuesDataProfileAnimal(response);
        return this.dataAnimal = response;
      });    
  }

  getInformationPinnipedos() {
    this.profileAnimals.getProfilePinnipedos().subscribe(
      (response: IAnimal) => {
        this.setValuesDataProfileAnimal(response);
        return this.dataAnimal = response;
      });    
  }

  getInformationPaquidermos() {
    this.profileAnimals.getProfilePaquidermos().subscribe(
      (response: IAnimal) => {
        this.setValuesDataProfileAnimal(response);
        return this.dataAnimal = response;
      });    
  }

  getInformationAves() {
    this.profileAnimals.getProfileAves().subscribe(
      (response: IAnimal) => {
        this.setValuesDataProfileAnimal(response);
        return this.dataAnimal = response;
      });  
  }

  getInformationInsectos() {
    this.profileAnimals.getProfileInsectos().subscribe(
      (response: IAnimal) => {
        this.setValuesDataProfileAnimal(response);
        return this.dataAnimal = response;
      });  
  }

  getInformationMamiferos() {
    this.profileAnimals.getProfileMamiferos().subscribe(
      (response: IAnimal) => {
        this.setValuesDataProfileAnimal(response);
        return this.dataAnimal = response;
      });  
  }

  onSubmit(value: IAnimal) {
    if(this.profileAnimal.valid){
      this.show = true;
    }
  }

  clearForm() {
    this.profileAnimal.reset();
    this.show = false;
  }
}
