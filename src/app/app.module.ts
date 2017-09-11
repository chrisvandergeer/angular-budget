import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Transaktie } from './transaktie';
import { TransaktiesComponent } from './transakties.component';
import { TagsComponent } from './tags.component';
import { TransaktieDataService } from './transaktie-data-service';

@NgModule({
  declarations: [
    AppComponent, TransaktiesComponent, TagsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [ TransaktieDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
