import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { DataService } from '../data.service';
import { IncidentModel } from '../incident-model';
import value from '*.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['collision_type', 'injury_count', 'agressive_driving', 'hour_of_day', 'illumination', 'road_condition'];
  data: IncidentModel[] = [];
  dataSource: any; // wrap data to use with Sorting
  selectedRow: IncidentModel;

  constructor(private dataService: DataService) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;  // Angular Material sorting object


  ngOnInit() {
    // subscribe to subject/observable for data change.
    this.dataService.getDataSubject().subscribe((value: IncidentModel[]) => {
      console.log('List component received new data !!!!');
      this.data = value;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.sort = this.sort;
      console.log(this.data);
    });
  }

  onRowClicked(row: IncidentModel){
    this.selectedRow = row;
    console.log('Row clicked: ', row);
  }

  // When user select an icon on map.
  updateSelected(id) {
    // console.log(id);
    for (const item of this.data){
      if (item.crash_record_number === id) {
        this.selectedRow = item;
        break;
      }
    }
  }

}
