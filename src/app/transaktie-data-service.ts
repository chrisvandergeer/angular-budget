import { TRANSAKTIES } from './mock';
import { Injectable } from '@angular/core';

@Injectable()
export class TransaktieDataService {

  getTransakties() {
    return TRANSAKTIES;
  }
}
