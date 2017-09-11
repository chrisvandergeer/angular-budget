import { Component } from '@angular/core';

import { TransaktiesComponent } from './transakties.component';
import { TagsComponent } from './tags.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mijn Transakties';

  transakties: boolean = true;
  tags: boolean;

  showTransakties() {
    this.hideAll();
    this.transakties = true;
  }

  showTags() {
    this.hideAll();
    this.tags = true;
  }

  hideAll() {
    this.transakties = false;
    this.tags = false;
  }
}
