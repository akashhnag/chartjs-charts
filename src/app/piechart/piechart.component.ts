import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var myPieChart = new Chart("piechart",{
      type: 'pie',
      data:  {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: ['rgba(255, 99, 132, 0.2)',            
            'rgba(255, 206, 86, 0.2)',
            'rgba(54, 162, 235, 0.2)']
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    }
  })
}

}
