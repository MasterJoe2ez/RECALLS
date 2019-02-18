import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  typeChart: any;

  dataChart: any;

  optionsChart: any;

  constructor() { }

  ngOnInit() {

    this.typeChart = 'pie';   ////// สามารถกำหนดเป็น 'line','bar','radar','pie','doughnut','polarArea','bubble','scatter'

    this.dataChart = {

      labels: ['January', 'February', 'March', 'April', 'May'],

      datasets: [

        {

          label: 'My Stats Chart',

          data: [10, 30, 50, 30, 40],

          backgroundColor : ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12']

        }

      ]

    };

    this.optionsChart = {

      responsive: true,

      maintainAspectRatio: false

    };

  }
  }
