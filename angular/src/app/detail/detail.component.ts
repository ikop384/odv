import { Component, OnInit, Input } from '@angular/core';
import { IncidentModel } from '../incident-model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() parentSelectedRow: IncidentModel;

  data: IncidentModel[] = [];

  vehicleText: string;

  incidentCount = 0;
  injuryCount = 0;
  fatalityCount = 0;
  speedingCount = 0;
  agressiveCount = 0;

  colTypeHash = new Map<string, number>();
  illumTypeHash = new Map<string, number>();
  roadTypeHash = new Map<string, number>();
  weatherTypeHash = new Map<string, number>();

  vehicleCount = 0;
  vehicleTypeHash = new Map<string, number>();
  pedestrianCount = 0;

  hourHash = new Map<string, number>();

  constructor(private dataService: DataService) { } // inject Data Service

  ngOnInit() {
    // subscribe to subject/observable for data change.
    this.dataService.getDataSubject().subscribe((value: IncidentModel[]) => {
      // console.log('Detail component received new data !!!!');
      this.data = value;
      this.buildStats(); // only build stats once
    });
  }

  // don't need for direct value update but require for custom text.
  ngOnChanges(changes: any) {
    // console.log('Detail component receive changes from parent', changes);
    if ( changes.parentSelectedRow !== undefined && changes.parentSelectedRow.currentValue !== undefined){
      // console.log(changes.parentSelectedRow.currentValue);
      this.buildVehicleText(changes.parentSelectedRow.currentValue);
    }
  }

  buildVehicleText(selected: IncidentModel) {
    this.vehicleText = ''; // reset

    if ( selected.automobile_count > 0) {
      this.vehicleText += selected.automobile_count + '-Automobile. ';
    }
    if ( selected.bicycle_count > 0) {
      this.vehicleText += selected.bicycle_count + '-Bicycle. ';
    }
    if ( selected.bus_count > 0) {
      this.vehicleText += selected.bus_count + '-Bus. ';
    }
    if ( selected.heavy_truck_count > 0) {
      this.vehicleText += selected.heavy_truck_count + '-Heavy_Truck. ';
    }
    if ( selected.motorcycle_count > 0) {
      this.vehicleText += selected.motorcycle_count + '-Motorcycle. ';
    }
    if ( selected.small_truck_count > 0) {
      this.vehicleText += selected.small_truck_count + '-Small_Truck. ';
    }
    if ( selected.suv_count > 0) {
      this.vehicleText += selected.suv_count + '-SUV. ';
    }
    if ( selected.van_count > 0) {
      this.vehicleText += selected.van_count + '-Van. ';
    }
  }

  // Toggle from Detail view to Status view
  showStatus() {
    this.parentSelectedRow = undefined;
  }

  buildStats() {
    this.incidentCount = this.data.length;
    // reset
    this.injuryCount = 0;
    this.fatalityCount = 0;
    this.speedingCount = 0;
    this.agressiveCount = 0;

    this.colTypeHash = new Map<string, number>();
    this.illumTypeHash = new Map<string, number>();
    this.roadTypeHash = new Map<string, number>();
    this.weatherTypeHash = new Map<string, number>();

    this.vehicleCount = 0;
    this.vehicleTypeHash = new Map<string, number>();
    this.pedestrianCount = 0;

    this.hourHash = new Map<string, number>();

    for (const item of this.data) {
      this.injuryCount += item.injury_count;
      this.fatalityCount += item.fatality_count;
      if (item.speeding === 'Yes') { this.speedingCount ++; }
      if (item.agressive_driving === 'Yes') { this.agressiveCount ++; }

      this.colTypeHash.set(item.collision_type, this.increaseCount(this.colTypeHash, item.collision_type, 1));
      this.illumTypeHash.set(item.illumination, this.increaseCount(this.illumTypeHash, item.illumination, 1));
      this.roadTypeHash.set(item.road_condition, this.increaseCount(this.roadTypeHash, item.road_condition, 1));
      this.weatherTypeHash.set(item.weather, this.increaseCount(this.weatherTypeHash, item.weather, 1));

      this.pedestrianCount += item.pedestrian_count;
      this.vehicleCount += item.vehicle_count;
      this.vehicleTypeHash.set('Automobile', this.increaseCount(this.vehicleTypeHash, 'Automobile', item.automobile_count));
      this.vehicleTypeHash.set('Bicycle',  this.increaseCount(this.vehicleTypeHash, 'Bicycle', + item.bicycle_count));
      this.vehicleTypeHash.set('Bus',  this.increaseCount(this.vehicleTypeHash, 'Bus', + item.bus_count));
      this.vehicleTypeHash.set('Heavy_Truck',  this.increaseCount(this.vehicleTypeHash, 'Heavy_Truck', item.heavy_truck_count));
      this.vehicleTypeHash.set('Motorcycle',  this.increaseCount(this.vehicleTypeHash, 'Motorcycle', item.motorcycle_count));
      this.vehicleTypeHash.set('Small_Truck',  this.increaseCount(this.vehicleTypeHash, 'Small_Truck', item.small_truck_count));
      this.vehicleTypeHash.set('SUV',  this.increaseCount(this.vehicleTypeHash, 'SUV', item.suv_count));
      this.vehicleTypeHash.set('Van',  this.increaseCount(this.vehicleTypeHash, 'Van', item.van_count));

      this.hourHash.set(item.hour_of_day.toString(), this.increaseCount(this.hourHash, item.hour_of_day.toString(), 1));
    }
  }

  increaseCount(map: Map<string, number>, key: string, amount: number){
    let count = map.get(key);
    if (count === undefined){ count = 0; }
    return count + amount;

  }

  getKeys(map: Map<string, number>){
    return Array.from(map.keys());
  }

  getSortedKeys(map: Map<string, number>){
    return Array.from(map.keys()).sort(function(a:any, b:any){return a-b; });
  }


}


