import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
@Component({
  selector: 'app-stackedbar',
  templateUrl: './stackedbar.component.html',
  styleUrls: ['./stackedbar.component.css']
})
export class StackedbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var stackedBar=new Chart("stackedbar",{
      type:"bar",
      data:{
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasetes:[{
          label:"Dataset 1",
          backgroundColor: "rgba (0,255,0,0.5)",
          data:[48,65,98,21,65,41,98]
        },
        {
          label:"Dataset 2",
          data:[98,54,24,96,35,1,58]
        },
        {
          label:"Dataset 3",
          data:[98,65,32,84,32,65,78]
        }
      ]
      },
      options: {
        title: {
          display: true,
          text: 'Chart.js Bar Chart - Stacked'
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        responsive: true,
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
        
    })
  }

}
