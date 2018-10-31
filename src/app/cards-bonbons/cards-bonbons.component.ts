import { Component, OnInit  } from '@angular/core';
import { BonbonsService } from '../bonbons.service';

@Component({
  selector: 'app-cards-bonbons',
  templateUrl: './cards-bonbons.component.html',
  styleUrls: ['./cards-bonbons.component.css']
})
export class CardsBonbonsComponent implements OnInit{

   public nom_de_bonbon:any[];
   private service:BonbonsService;

   constructor(param_service:BonbonsService){
     this.nom_de_bonbon = null;
     this.service = param_service;
   }

   public ngOnInit():void{
      this.service.getAvoirBonbon().subscribe(
       (param_nom_de_bonbon:any[]) => {
         this.nom_de_bonbon = param_nom_de_bonbon;
       }
    );
   }

   public changeHandler(param_str:string){
      this.service.search = param_str;
      this.service.getAvoirBonbon().subscribe(
       (param_nom_de_bonbon:any[]) => {
         this.nom_de_bonbon = param_nom_de_bonbon;
       }
    );
   }
 }
