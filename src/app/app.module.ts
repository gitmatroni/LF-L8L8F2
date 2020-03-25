import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { TeamComponent } from './team/team.component';
import { ContentComponent } from './content/content.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { LinksComponent } from './links/links.component';
import { SearchComponent } from './search/search.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    TeamComponent,
    ContentComponent,
    AdvertiseComponent,
    FooterComponent,
    CardsComponent,
    LinksComponent,
    SearchComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
