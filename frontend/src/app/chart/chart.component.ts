import { Component, OnInit, Input} from '@angular/core';
import Data from '../chart-view/data'

declare const Plotly: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  plot:Object[] = [];
  @Input() plotData!:Data 
  loaded: boolean =  false;
  constructor() { }

  plotValues(){
    let xSide = [];
    let ySide = []
    if(this.plotData==undefined){}
    else{
    if (this.plotData.response ==undefined){
      for (let i of this.plotData.allResponse){
        for(let j of i.values){
          xSide.push(j.time)
          ySide.push(j.timeData)
        }
        let temp = {
          x: xSide,
          y: ySide,
          type: 'scatter',
        }
        this.plot.push(temp)
      }
    }
    else{
      
    for(let i of this.plotData.response.values){
      xSide.push(i.time)
      ySide.push(i.timeData)
    }
    let temp = {
      x: xSide,
      y: ySide,
      type: 'scatter',
    }
    this.plot.push(temp)
  }}

}
   ngOnChanges() {
    this.loaded = false;
    this.plot=[]
    this.plotValues();
    this.loaded = true;
    Plotly.newPlot('chart', this.plot)
      }
  ngOnInit() {
}
}


