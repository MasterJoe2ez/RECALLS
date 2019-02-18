import {Component, OnInit} from '@angular/core';
import {Language} from 'angular-l10n';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  @Language() lang: string;
  typeChart: any;

  dataChart: any;

  optionsChart: any;

  constructor(private _iconRegistry: MatIconRegistry,
              private _domSanitizer: DomSanitizer,
  ) {
    this._iconRegistry.addSvgIconInNamespace('assets', 'logo', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/images/logo.svg'));
  }

  ngOnInit(): void {
    this.typeChart = 'pie';   ////// สามารถกำหนดเป็น 'line','bar','radar','pie','doughnut','polarArea','bubble','scatter'

    this.dataChart = {

      labels: ['January', 'February', 'March', 'April', 'May'],

      datasets: [

        {

          label: 'My Stats Chart',

          data: [10, 30, 50, 30, 40],

          backgroundColor: ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12']

        }

      ]
    };
  }
}
