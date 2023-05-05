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


  options: Options = {
    floor: 80000,
    ceil: 250000
  };

  searchTerm:string='';

  cards:Cards[]=[]

 constructor() {


 }

    ngOnInit() {

      this.cards= tarjetas
      this.cards = this.cards.filter(t=>t.id>=1);
      console.log(this.cards)
    }
}
