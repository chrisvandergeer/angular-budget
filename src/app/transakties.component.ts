import { Component } from '@angular/core';

import { Transaktie } from './transaktie';
import { TRANSAKTIES } from './mock';

@Component({
  selector: 'transakties',
  templateUrl: './transakties.component.html',
  styleUrls: ['./transakties.component.css']
})
export class Transakties {
  transakties: Transaktie[];

  ngOnInit() {
    this.transakties = TRANSAKTIES;
  }

  aantalTransakties() {
    return this.transakties.length;
  }

  watch(t) {
    t.watch = true;
  }

  unwatch(t) {
    t.watch = false;
  }
}
