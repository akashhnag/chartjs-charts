import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
@Component({
  selector: 'app-line-styles',
  templateUrl: './line-styles.component.html',
  styleUrls: ['./line-styles.component.css']
})
export class LineStylesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var lineStyles=new Chart("linestyles",{
      type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June'],
				datasets: [{
					label: 'Unfilled',
					fill: false,
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
					borderColor: 'rgba(255, 99, 132, 0.8)',
					data: [45,98,32,78,56,-15],
				}, {
					label: 'Dashed',
					fill: false,
					backgroundColor: 'rgba(54, 162, 235, 0.2)',
					borderColor: 'rgba(54, 162, 235, 0.8)',
					borderDash: [5, 5],
					data: [78,65,31,-48,15,78],
				}, {
					label: 'Filled',
					backgroundColor: 'rgba(255, 206, 86, 0.2)',
					borderColor: 'rgba(255, 206, 86, 0.8)',
					data: [89,-45,73,65,35,95],
					fill: true,
				}]
    }
  })
}

}
