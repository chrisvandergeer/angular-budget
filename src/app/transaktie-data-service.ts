import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Transaktie } from './transaktie';
import 'rxjs/add/operator/map';

@Injectable()
export class TransaktieDataService {

  constructor(private http : Http) { }

  getTransakties() {
    return this.http.get('http://localhost:8080/transaktie').map(response => <Transaktie[]>response.json().data);
  }
}
