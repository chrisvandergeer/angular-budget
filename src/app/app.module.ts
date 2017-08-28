import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Transakties } from './transakties.component';
import { TransaktieDataService } from './transaktie-data-service';

@NgModule({
  declarations: [
    AppComponent, Transakties
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ TransaktieDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
