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

    const fonction_donnees_de_bonbons_issues_du_serveur = (data:any):any => {
      console.log(data);
      return data;

    };

    return promesse_de_trouver_des_bonbons.pipe( map( fonction_donnees_de_bonbons_issues_du_serveur ));
  }
}
