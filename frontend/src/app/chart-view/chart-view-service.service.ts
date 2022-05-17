import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import Data from './data';
import { ChartComponent } from '../chart/chart.component';

@Injectable({
  providedIn: 'root'
})
export class ChartViewServiceService {
  private urlInitial = "http://127.0.0.1:5000/initialData";
  private urlCell = "http://127.0.0.1:5000/data/";

  lengthOfData!: number;

  constructor(private http: HttpClient) { }

  getDataLength(): Observable<Data> {
    return this.http.get<Data>(this.urlInitial);
  }
  getCellData(cellNo: String): Observable<Data> {
    return this.http.get<Data>(this.urlCell + cellNo);
  }
  getAllData(){
    return this.http.get<Data>(this.urlCell + "all");
  }
}
