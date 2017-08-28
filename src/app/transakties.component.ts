import { Component } from '@angular/core';

import { Transaktie } from './transaktie';
import { TransaktieDataService } from './transaktie-data-service';

@Component({
  selector: 'transakties',
  templateUrl: './transakties.component.html',
  styleUrls: ['./transakties.component.css']
})
export class Transakties {
  transakties: Transaktie[];

  constructor(private transaktieDataService : TransaktieDataService) {};

  ngOnInit() {
    this.transakties = this.transaktieDataService.getTransakties();
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

  addTag(event, tr) {
    if (tr.tags.indexOf(event.target.value) < 0) {
      tr.tags.push(event.target.value);
    }
  }

  removeTag(tagname, tr) {
    let index = tr.tags.indexOf(tagname);
    if (index >= 0) {
      tr.tags.splice(index, 1);
    }
  }
}
