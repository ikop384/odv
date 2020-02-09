import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import 'ol/ol.css';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Overlay from 'ol/Overlay';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import {Icon, Style} from 'ol/style';
import * as olProj from 'ol/proj';

import { IncidentModel } from '../incident-model';
import { DataService } from '../data.service';

// Example: https://openlayers.org/en/latest/examples/icon.html

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Output() notifyParent: EventEmitter<any> = new EventEmitter();  // used to notify parent about selectedFeature
  @Input() parentSelectedRow: IncidentModel;

  data: IncidentModel[] = [];
  map: Map;
  iconLayer: VectorLayer;  // layer for ODV icons
  selectedFeature: Feature;

  constructor(private dataService: DataService) { } // inject Data Service

  ngOnInit() {
    this.iconLayer = new VectorLayer({
      source: new VectorSource({ features: [] })
    });

    // Init Map
    this.map = new Map({
      layers: [ new TileLayer({ source: new OSM() }), this.iconLayer],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 12
      })
    });

    // subscribe to subject/observable for data change.
    this.dataService.getDataSubject().subscribe((value: IncidentModel[]) => {
      console.log('Map component received new data !!!!');
      this.data = value;
      this.addIcons();
    });
  }

  // when a row is selected in datasheet, need to high light on map too
  ngOnChanges(changes: any) {
    console.log('Map component receive changes from parent', changes);
    if (this.iconLayer === undefined){
      return;
    }
    const vectorSource = this.iconLayer.getSource();
    if (changes.parentSelectedRow !== undefined && changes.parentSelectedRow.currentValue !== undefined){

      // console.log(changes.parentSelectedRow.currentValue);
      if ( this.selectedFeature){
        this.selectedFeature.setStyle(new Style({ image: new Icon({ src: 'assets/car-accident-icon.png' }) }));
      }
      // set new selectedFeature.
      const feature = vectorSource.getFeatureById(changes.parentSelectedRow.currentValue.crash_record_number);
      if (feature) {
        feature.setStyle(new Style({ image: new Icon({ src: 'assets/car-accident-icon-selected.png' }) }));
        this.selectedFeature = feature;
      }
    }
  }

  addIcons() {

    // console.log('add new icons', this.data.length);
    const vectorSource = new VectorSource();
    let center: IncidentModel; // choose a point to set at center (1st point may not valid)

    for (const item of this.data) {

      if (item.latitude === undefined || item.longitude === undefined) {
        // Must exclude incident w/o lat/lon or map won't display anything at all
        console.log('Incident w/o lat lon: ' + item.crash_record_number);
        continue;
      }
      if (center === undefined){
        center = item; // do this once only
      }

      // Build Feature
      const iconFeature = new Feature({
        geometry: new Point(olProj.fromLonLat([item.longitude, item.latitude])),
        name: item.crash_record_number
      });
      iconFeature.setStyle(new Style({ image: new Icon({ src: 'assets/car-accident-icon.png' }) }));
      iconFeature.setId(item.crash_record_number);

      // Add to Icon Layer's source
      vectorSource.addFeature(iconFeature);
    }

    // this.iconLayer.getSource().refresh();
    this.iconLayer.setSource(vectorSource);


    // set center to the 1st point in data set.
    this.map.getView().setCenter(olProj.fromLonLat([center.longitude, center.latitude]));

    // ** Some debug stuff ***
    // this.map.getView().setCenter(olProj.fromLonLat([-75.3927, 40.0973]));
    // this.map.getView().changed(); // dispatch a 'change' event
    // this.map.renderSync();
  }

  // handle click event
  onMapClick(evt) {
    // reset current selected Feature to old style
    if ( this.selectedFeature){
      this.selectedFeature.setStyle(new Style({ image: new Icon({ src: 'assets/car-accident-icon.png' }) }));
    }

    // console.log(evt);
    const feature = this.map.forEachFeatureAtPixel(this.map.getEventPixel(evt), function (feature) { return feature; });
    if (feature) {
      feature.setStyle(new Style({ image: new Icon({ src: 'assets/car-accident-icon-selected.png' }) }));
      this.selectedFeature = feature;

      // notify parent
      this.notifyParent.emit(feature.getId());
      console.log(feature.getId());
    }
  }

}
