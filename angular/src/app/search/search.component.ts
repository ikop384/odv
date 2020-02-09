import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { DataService } from '../data.service';

// ref: https://material.angular.io/components/select/overview

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  years: number[] = [1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
    2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];

  // validate required elements
  selectFormControl = new FormControl('', Validators.required);

  selectedCounty = '46';
  selectedMunicipality = '46220';
  selectedYear: number;
  selectedMonth: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Query for ' + this.selectedYear + ' - ' + this.selectedMonth);
    if (this.selectedYear && this.selectedMonth) {
      this.dataService.requestData(this.selectedYear, this.selectedMonth);
    }
  }

}
