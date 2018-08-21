import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
@Component({
  selector: 'app-polarareachart',
  templateUrl: './polarareachart.component.html',
  styleUrls: ['./polarareachart.component.css']
})
export class PolarareachartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var polarareachart=new Chart("polarareachart",{
      type:"polarArea",
      data : {
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
