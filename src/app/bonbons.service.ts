import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BonbonsService {

  private bonbonRechercher:HttpClient;

  constructor(param_rechercher_bonbon:HttpClient) {
    this.bonbonRechercher = param_rechercher_bonbon;
  }

  public getAvoirBonbon():Observable<any>{
    const promesse_de_trouver_des_bonbons:Observable<any> = this.bonbonRechercher.get("https://fr.openfoodfacts.org/cgi/search.pl?search_terms=fraise tagada&tagtype_0=categories&tag_contains_0=contains&tag_0=Bonbons&search_simple=1&json=1&page=1")

    const fonction_donnees_de_bonbons_issues_du_serveur = (data:any):any[] => {
      console.log(data);
      const result:any[] = [];
      let current:any = {};

      for(let i = 0; i < data.products.length ; i++ ) {
         current = {};

         current.name = data.products[i].product_name_fr;
         if (current.name == null || current.name == undefined) current.name = "Inconnu";

         current.type = data.products[i].brands;
         if (current.name == null || current.name == undefined) current.name = "Inconnu";

         current.img = data.products[i].image_url;

         current.energy = data.products[i].nutriments.energy + " " + data.products[i].nutriments.energy_unit;
         if (data.products[i].nutriments.energy == null || data.products[i].nutriments.energy == undefined) current.energy = "0 kcal";

         current.fat = data.products[i].nutriments.fat + " " + data.products[i].nutriments.fat_unit;
         if (data.products[i].nutriments.fat == null || data.products[i].nutriments.fat == undefined) current.fat = "0 g";

         current.salt = data.products[i].nutriments.salt + " " + data.products[i].nutriments.salt_unit;
         if (data.products[i].nutriments.salt == null || data.products[i].nutriments.salt == undefined) current.salt = "0 g";

         current.proteins = data.products[i].nutriments.proteins + " " + data.products[i].nutriments.proteins_unit;
         if (data.products[i].nutriments.proteins == null || data.products[i].nutriments.proteins == undefined) current.proteins = "0 g";

         current.fiber = data.products[i].nutriments.fiber + " " + data.products[i].nutriments.fiber_unit;
         if (data.products[i].nutriments.fiber == null || data.products[i].nutriments.fiber == undefined) current.fiber = "0 g";

         current.sugar = data.products[i].nutriments.sugars + " " + data.products[i].nutriments.sugars_unit;
         if (data.products[i].nutriments.sugars == null || data.products[i].nutriments.sugars == undefined) current.sugar = "0 g";

         result.push(current);
      }
      return result;

    };

    return promesse_de_trouver_des_bonbons.pipe( map( fonction_donnees_de_bonbons_issues_du_serveur ));
  }
}
