import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChartViewServiceService } from './chart-view/chart-view-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'view';
  about: boolean = true;
  chart: boolean = false;
  lengthOfData!: number

  constructor(private router: Router, private chartService: ChartViewServiceService){
  }
  ngOnInit(): void {
    this.getDataLength()
  }
  handle(toggle: String){ 
    if(toggle == "about"){
      this.about = true;
      this.chart = false;
    }
    else{
      this.chart = true;
      this.about = false;

    }
  }
  getDataLength(){
    this.chartService.getDataLength().subscribe(
      data => {this.lengthOfData = data.length;  console.log(this.lengthOfData)
      }
    )
  }
}
