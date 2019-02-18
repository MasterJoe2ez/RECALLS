import { Component, OnInit } from '@angular/core';
import {Page} from "../../shared/model/page";


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  loading: boolean = true;

  page = new Page();
  cache: any = {};
  expanded: any = {};

  rows: any[] = [];
  temp = [];

  typeChart: any;

  dataChart: any;

  optionsChart: any;

  constructor() { }

  ngOnInit() {

    this.typeChart = 'pie';   ////// สามารถกำหนดเป็น 'line','bar','radar','pie','doughnut','polarArea','bubble','scatter'

    this.dataChart = {

      labels: ['Plastic', 'Metal', 'Paper', 'Grass'],

      datasets: [

        {

          label: 'My Stats Chart',

          data: [60, 80, 125, 70],

          backgroundColor : ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12']

        }

      ]

    };

    this.optionsChart = {

      responsive: true,

      maintainAspectRatio: false,

  };

  }

}
