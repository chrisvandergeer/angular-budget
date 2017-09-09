import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Transaktie } from './transaktie';
import { Totalen } from './totalen';
import 'rxjs/add/operator/map';

@Injectable()
export class TransaktieDataService {

  constructor(private http : Http) { }

  getTransakties() {
    return this.http.get('http://localhost:8080/transaktie')
      .map(response => <Transaktie[]>response.json());
  }

  findTransakties(search) {
    return this.http.get('http://localhost:8080/transaktie?search=' + search)
      .map(response => <Transaktie[]>response.json());
  }

  findAndTag(search, tag) {
    return this.http.post('http://localhost:8080/transaktie?search=' + search + '&tag=' + tag, null)
      .map(response => <Transaktie[]>response.json());
  }

  getTotalen() {
    return this.http.get('http://localhost:8080/aggregatie?search=')
      .map(response => <Totalen[]>response.json());
  }

  findTotalen(search) {
    return this.http.get('http://localhost:8080/aggregatie?search=' + search)
      .map(response => <Totalen[]>response.json());
  }
}
