import { Component} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  public aImg: string[] = ['Searchs_000.jpg','Searchs_001.jpg','Searchs_003.jpg','Searchs_004.jpg','Searchs_005.jpg'];
  public tTimer:number ;

 public changeMoiCeFond():any
{
   let nSize = this.aImg.length;
   let nIndex = Math.floor(Math.random()*(nSize+1));

   //Ici faudrait vérifier que le fond qu'on tire aléatoirement n'est pas le meme que le courant ! si c'est le même faudrait faire une récursion ou rajouter enlever 1...
   document.body.style.background =  "url("+this.aImg[nIndex]+")";

   //changera le fond ttes les 14 secondes
   this.tTimer = setTimeout("changeMoiCeFond()", 10000);
}

 

}
