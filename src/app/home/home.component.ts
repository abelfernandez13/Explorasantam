import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { SearchComponent } from '../search/search.component';
import { Pipe,PipeTransform } from '@angular/core';
import { CardFilterPipe } from "../pipes/card-filter.pipe";
import { LabelType, Options } from '@angular-slider/ngx-slider';
import { MastercardsComponent } from "../mastercards/mastercards.component";
import { tarjetas } from '../data/datos';
import { Cards } from '../model/cards';
import { CardService } from '../shared/services/card.service';
import { lugar } from '../data/lugares';
import { Lugares } from '../model/Lugares';
import { CardcontacComponent } from "../cardcontac/cardcontac.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  count: number = 0; // Adultos
  count1: number = 0; // Adultos
  count2: number = 0; // Niños
  count3: number = 0; // Niños
  count4: number = 0;
  count5: number = 0;
  count6:number;
  count7:number;
  active: boolean;
  active1: boolean;

  lista:Cards[]=[];
  listaTarjetas:Cards[]=[];
  lugares:Lugares[]=[];

  panelOpenState = false;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

/////// Adultos
  clickCount(): void {
      this.count--;
      this.count2 = this.count - this.count1;
      if( this.count2<=0  && this.count2 === 0 ) {
        this.active = true;
      }else{
      this.active = false;
      }

      this.count2= this.count6;
   }

   clickCount1(): void {

    if( this.count2<=0  && this.count2===0 ) {
      this.active = false;
    }else{
    this.active = false;
    }
    this.count++ ;
    this.count2 = this.count + this.count1;

    }
///// Niños

clickCount3(): void {

  if( this.count3<=0  && this.count3===0 ) {
    this.active1 = false;
  }else{
  this.active1 = false;
  }
  this.count4++ ;
  this.count3 = this.count4 + this.count5;
  }

  clickCount2(): void {
    this.count4--;
    this.count3 = this.count4 - this.count5;
    if(this.count3<=0  && this.count3===0) {

      this.active1 = true;
     }else{
    this.active1 = false;
     }
    this.count3= this.count7;
    }
   colorTheme = 'theme-dark-blue';
    datePickerConfig:Partial<BsDatepickerConfig>;


    /////////////////////////filters////////////////

   
    constructor(public CardService:CardService)  {

      this.lista=tarjetas
      this.listaTarjetas=tarjetas
      this.lugares = lugar

      console.log(this.listaTarjetas)

     
      this.datePickerConfig = Object.assign({},
        {
          containerClass: 'theme-dark-blue',
          showWeekNumbers: false,
          // minDate: 0, // 0 days offset = today
          // maxDate: 'today',
          dateInputFormat: 'DD/MM/YYYY'
        });
    }
 

    minValue: number = 80000;
    maxValue: number = 300000;
    options: Options = {
      floor: 80000,
      ceil: 300000
    };

  ngOnInit() { 
    CardcontacComponent;
    this.lista=tarjetas
    this.listaTarjetas=tarjetas
 

}
  
  verIdpar():void{
    this.listaTarjetas = this.lista.filter(t=>t.precios >= this.minValue && t.precios <= this.maxValue
                                                )

    console.log(this.listaTarjetas)
        }
     }



