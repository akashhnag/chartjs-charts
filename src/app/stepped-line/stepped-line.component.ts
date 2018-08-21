import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
@Component({
  selector: 'app-stepped-line',
  templateUrl: './stepped-line.component.html',
  styleUrls: ['./stepped-line.component.css']
})
export class SteppedLineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var steppedLine=new Chart("steppedline",{
      type: 'line',
				data: {
					labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
					datasets: [{
						label: 'steppedLine: Before Interpolation',
						steppedLine: true,
						data: [45,88,21,48,78,32],
						borderColor: 'rgba(255, 99, 132, 1)',
						fill: false,
					}]
				},
				options: {
					responsive: true,
					title: {
						display: true,
						//text: details.label,
					}
				}
    })
  }

}
