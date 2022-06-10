import { Component } from '@angular/core';
import { Page } from './models/page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BattleStep';
  pages: Page[] = [
    { name: 'home', label: 'Willkommen' },
    { name: 'now', label: 'Heute' },
    { name: 'history', label: 'Verlauf' }
  ];


}
