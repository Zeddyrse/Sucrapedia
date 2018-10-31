import { BonbonsService } from './bonbons.service';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResearchBonbonsPipe } from './research-bonbons.pipe';
import { CardsBonbonsComponent } from './cards-bonbons/cards-bonbons.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ResearchBonbonsPipe,
    CardsBonbonsComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BonbonsService, SearchBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
