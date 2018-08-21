import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
@Component({
  selector: 'app-radarchart',
  templateUrl: './radarchart.component.html',
  styleUrls: ['./radarchart.component.css']
})
export class RadarchartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*var myRadarChart = new Chart("radarchart", {
      type: 'radar',
      data: {
        labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
        datasets: [{
            data: 10,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',            
            //borderColor: ['rgba(255, 99, 132, 0.2)',],
            //fill:false
        },
        {
          data: 4,
          backgroundColor: 'rgba(255, 206, 86, 0.2)',            
          //borderColor: ['rgba(255, 99, 132, 0.2)',],
          //fill:false
      },
      {
        data: 7,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',            
        //borderColor: ['rgba(255, 99, 132, 0.2)',],
        //fill:false
    },
    {
      data: 16,
      backgroundColor: 'rgba(153, 102, 255, 0.2)',            
      //borderColor: ['rgba(255, 99, 132, 0.2)',],
      //fill:false
  },
      ]

    }
  });*/
  }

}
