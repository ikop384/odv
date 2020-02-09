import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IncidentModel } from './incident-model';
import mockData from './um-mock-data.json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Hold requested data set.
  // private data: IncidentModel[] = []; // or Array<IncidentModel>
  private dataSubject: BehaviorSubject<IncidentModel[]>;  // use subject, replace static data
  // Base data service URL; todo: create config
  baseUrl = 'http://localhost:8080/odv/um';

  constructor(private http: HttpClient) {
    // use mock data when developing client side, comment when integrate with service
    // TBD: used mock as base data when 1st log in (app still work w/o DB connection)
    // this.data = mockData;

    this.dataSubject = new BehaviorSubject<IncidentModel[]>(mockData); // inittial value
  }

  // Request data from remote server and save locally.
  requestData(year: number, month: number) {
    const queryUrl = this.baseUrl + '?month=' + month + '&year=' + year;
    this.http.get(queryUrl).subscribe((res: IncidentModel[]) => {
      console.log(queryUrl);
      console.log(res);
      this.dataSubject.next(res); // notify about new data.
    });
  }

  // Return data set of current query. Data will get updated automatically when changed.
  getDataSubject() {
    return this.dataSubject.asObservable();
  }
}
