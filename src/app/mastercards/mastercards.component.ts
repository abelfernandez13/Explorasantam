import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { CardFilterPipe } from "../pipes/card-filter.pipe";
 import { Cards } from '../model/cards';
import { tarjetas } from '../data/datos';
import { HomeComponent } from "../home/home.component";
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-mastercards',
  templateUrl: './mastercards.component.html',
  styleUrls: ['./mastercards.component.scss']
})
export class MastercardsComponent implements OnInit {

  minValue: number = 100000;
  maxValue: number = 200000;
  options: Options = {
    floor: 80000,
    ceil: 250000
  };

  searchTerm:string='';

  lista:Cards[]=[];
  listaTarjetas:Cards[]=[];

constructor() {
  this.lista=tarjetas
  this.listaTarjetas=tarjetas
  
 }

 ngOnInit():void {
 
   this.listaTarjetas = this.lista.filter(t=>t.precios >= this.minValue && t.precios <= this.maxValue)
   console.log(this.listaTarjetas)

 
    }
    verIdpar():void{
      this.listaTarjetas = this.lista.filter(t=>t.precios >= this.minValue && t.precios <= this.maxValue)

          // this.lista=tarjetas.filter(x=>x.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
        }
      
       }
