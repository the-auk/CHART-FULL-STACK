import { Component, OnInit, Input } from '@angular/core';
import { ChartViewServiceService } from './chart-view-service.service';
import Data from './data';
@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.css']
})
export class ChartViewComponent implements OnInit {
  lengthOfData!: number
  cells: String[] = []
  selectedItem: any = 1;
  data!: Data;

  constructor(private chartService: ChartViewServiceService){
  }
  ngOnInit(): void {
    this.getDataLength()
    this.chartService.getCellData("1").subscribe(
      data => {this.data = data;
      }
    )
  }
  getDataLength(){
    this.chartService.getDataLength().subscribe(
      data => {this.lengthOfData = data.length;
        for(let i = 1; i <= data.length; i++){
          this.cells.push("Cell " + i);
        }
      }
    )
  }
  onChange($event: String){
    this.selectedItem = $event;
    if(this.selectedItem == "all data"){
      this.chartService.getAllData().subscribe(
        data => {this.data = data;        }
      )
      return;
    }
    else{
    this.chartService.getCellData(this.selectedItem).subscribe(
      data => {this.data = data;
      }
    )
    }
  }
}
