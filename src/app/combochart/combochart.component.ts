import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
@Component({
  selector: 'app-combochart',
  templateUrl: './combochart.component.html',
  styleUrls: ['./combochart.component.css']
})
export class CombochartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var mixedChart = new Chart("combochart", {
      type: 'bar',
      data: {
        datasets: [{
              label: 'Bar Dataset',
              data: [15, 20, 30, 40],
              backgroundColor: 'rgba(255, 206, 86, 0.2)'
            }, {
              label: 'Line Dataset',
              data: [50, 43, 75, 23],
              backgroundColor:'rgba(255, 99, 132, 0.2)',
              fill:false,
              borderColor:'rgba(255, 99, 132, 0.2)',
              // Changes this dataset to become a line
              type: 'line',
            }],
        labels: ['January', 'February', 'March', 'April']
      },      
    });
  }

}
