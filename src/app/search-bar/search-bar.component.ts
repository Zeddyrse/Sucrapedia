import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BonbonsService } from '../bonbons.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

   @Output() onSearchChange:EventEmitter<string>;

   public searching:string = "";

  constructor() {
     this.onSearchChange = new EventEmitter<string>();
 }

  ngOnInit() {
  }

  transfer() {
     this.onSearchChange.emit(this.searching);
  }

}
