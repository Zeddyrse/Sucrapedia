import { MapService } from './../map.service';
import { Component  } from '@angular/core';

@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.css']
})
export class CompositeComponent {

  public villes_et_villages:any;
  

  constructor(param_service_villes:MapService){
    this.villes_et_villages = null;

    param_service_villes.getAvoirRoute().subscribe(
      (param_villes_et_villages:any) => {
        console.log("coucou",param_villes_et_villages);
        this.villes_et_villages = param_villes_et_villages;
      }
    )
  }
}  