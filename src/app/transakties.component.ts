import { Component } from '@angular/core';

@Component({
  selector: 'transakties',
  templateUrl: './transakties.component.html',
  styleUrls: ['./transakties.component.css']
})
export class Transakties {
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

  aantalTransakties() {
    return this.transakties.length;
  }
}
