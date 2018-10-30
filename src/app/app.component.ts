import { BonbonsService } from './bonbons.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sucrapedia';

  public nom_de_bonbon:any;

  constructor(param_service:BonbonsService){
    this.nom_de_bonbon = null;

    param_service.getAvoirBonbon().subscribe(
      (param_nom_de_bonbon:any) => {
        console.log("coucou",param_nom_de_bonbon);
        this.nom_de_bonbon = param_nom_de_bonbon;
      }
    )
  }
}
