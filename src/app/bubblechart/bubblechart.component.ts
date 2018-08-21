import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
@Component({
  selector: 'app-bubblechart',
  templateUrl: './bubblechart.component.html',
  styleUrls: ['./bubblechart.component.css']
})
export class BubblechartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var bubblechart=new Chart({
      type:"bubble",
      data:{
        datasets:[
          {label:"First Dataset",
          data:[
            {"x":20,"y":30,"r":15},
            {"x":40,"y":10,"r":10}],
            backgroundColor:"rgb(255, 99, 132)"}]
          }
    })
  }

}
