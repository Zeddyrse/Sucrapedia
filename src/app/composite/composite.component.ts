import { MapService } from './../map.service';
import { Component  } from '@angular/core';

@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.css']
})
export class CompositeComponent {

  public villes_et_villages:any;
  public buttonState:string = "primary";

  public ButtonText:string = "GOTTCHA !"

  constructor(param_service_villes:MapService){
    this.villes_et_villages = null;

    param_service_villes.getAvoirRoute().subscribe(
      (param_villes_et_villages:any) => {
        console.log("coucou",param_villes_et_villages);
        this.villes_et_villages = param_villes_et_villages;
      }
    )
  }

  public switching():void {
     if (this.buttonState == "primary") this.buttonState = "warning";
     else this.buttonState = "primary";

     if (this.ButtonText == "GOTTCHA !") this.ButtonText = this.villes_et_villages[9].adresse;
     else this.ButtonText = "GOTTCHA !";
 }
}
