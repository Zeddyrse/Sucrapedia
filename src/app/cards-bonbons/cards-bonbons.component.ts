import { Component  } from '@angular/core';
import { BonbonsService } from '../bonbons.service';

@Component({
  selector: 'app-cards-bonbons',
  templateUrl: './cards-bonbons.component.html',
  styleUrls: ['./cards-bonbons.component.css']
})
export class CardsBonbonsComponent {

   public nom_de_bonbon:any[];

   constructor(param_service:BonbonsService){
     this.nom_de_bonbon = null;

     param_service.getAvoirBonbon().subscribe(
       (param_nom_de_bonbon:any[]) => {
         console.log("coucou",param_nom_de_bonbon);
         this.nom_de_bonbon = param_nom_de_bonbon;
       }
     )
   }
 }
