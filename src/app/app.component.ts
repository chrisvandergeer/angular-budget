import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  transakties = [{
    "datum": "01-08-2017",
    "bedrag": -123.32,
    "omschrijving": "Pinautomaat 1-8 13:23:43"
  },
  {
    "datum": "02-08-2017",
    "bedrag": -432,
    "omschrijving": "Action"
  },
  {
    "datum": "03-08-2017",
    "bedrag": 2980.21,
    "omschrijving": "Salaris"
  }];
  title = 'My first Angular app';

  aantalTransakties() {
    return this.transakties.length;
  }
}
