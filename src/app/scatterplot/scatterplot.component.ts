import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
@Component({
  selector: 'app-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.css']
})
export class ScatterplotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var scatterChart = new Chart("scatterplot", {
      type: 'scatter',
      data: {
          datasets: [{
              label: 'Scatter Dataset',
              data: [{
                  x: -10,
                  y: 0,
                  backgroundColor:'rgba(255, 99, 132, 0.2)',
                  borderColor:'rgba(255, 99, 132, 0.2)'
              }, {
                  x: 0,
                  y: 10,
                  backgroundColor:'rgba(54, 162, 235, 0.2)'
              }, {
                  x: 10,
                  y: 5,
                  backgroundColor:'rgba(255, 206, 86, 0.2)'
              }],
              backgroundColor:'rgba(255, 99, 132, 0.2)'
          }]
      },
      options: {
          scales: {
              xAxes: [{
                  type: 'linear',
                  position: 'bottom'
              }]
          }
      }
  });
  }

}
