import { Component } from '@angular/core';

import { Transaktie } from './transaktie';
import { Totalen } from './totalen';
import { TransaktieDataService } from './transaktie-data-service';

@Component({
  selector: 'transakties',
  templateUrl: './transakties.component.html',
  styleUrls: ['./transakties.component.css']
})
export class TransaktiesComponent {
  transakties: Transaktie[];
  totalen: Totalen[];
  searchString: string;
  tag2add: string;

  constructor(private transaktieDataService : TransaktieDataService) {};

  ngOnInit() {
    this.transaktieDataService.getTransakties().subscribe(tr => this.transakties = tr);
    this.transaktieDataService.getTotalen().subscribe(tot => this.totalen = tot);
  }

  search(event) {
    if (event.target.value.length > 0) {
      this.transaktieDataService.findTransakties(this.searchString).subscribe(tr => this.transakties = tr);
      this.transaktieDataService.findTotalen(this.searchString).subscribe(t => this.totalen = t);
    } else {
      this.transaktieDataService.getTransakties().subscribe(tr => this.transakties = tr);
      this.transaktieDataService.getTotalen().subscribe(tot => this.totalen = tot);
    }
  }

  addTag() {
    this.transaktieDataService.findAndTag(this.searchString, this.tag2add).subscribe(tr => this.transakties = tr);
  }

  aantalTransakties() {
    let sum = 0;
    if (Array.isArray(this.transakties)) {
      sum = this.transakties.length;
    }
    return sum;
  }

}
