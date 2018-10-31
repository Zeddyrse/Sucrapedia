import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  private maproad:HttpClient;

  constructor(param_maproad:HttpClient) {
    this.maproad = param_maproad;
  }

  public getAvoirRoute():Observable<any>{
    const prommesse_de_trouver_la_route:Observable<any> = this.maproad.get("https://api-adresse.data.gouv.fr/search/?q=postcode=28240&limit=20")

    const fonction_de_traitement_de_la_route = (data:any):any =>{
      console.log(data);

      const result:any[]=[];
      let actuel:any = {};

      for(let i = 0; i < data.features.length ; i++){
         actuel = {};
        actuel.ville = data.features[i].properties.city;
        actuel.departement = data.features[i].properties.context;
        actuel.adresse = data.features[i].properties.label;

        result.push(actuel);
      }
      console.log("liste adresse", result);
      return result;
    };

    return prommesse_de_trouver_la_route.pipe(map(fonction_de_traitement_de_la_route));
  }

}
