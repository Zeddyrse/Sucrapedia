import { MapService } from './map.service';
import { BonbonsService } from './bonbons.service';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { StatisticsComponent } from './home-page/statistics/statistics.component';
import { SearchBarComponent } from './home-page/search-bar/search-bar.component';
import { AppComponent } from './app.component';
import { ResearchBonbonsPipe } from './research-bonbons.pipe';
import { CardsBonbonsComponent } from './cards-bonbons/cards-bonbons.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CompositeComponent } from './composite/composite.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ResearchBonbonsPipe,
    CardsBonbonsComponent,
    StatisticsComponent,
    HomePageComponent,
    CompositeComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [BonbonsService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
