import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location';

@Component({
  selector: 'app-path-builder',
  templateUrl: './path-builder.component.html',
  styleUrls: ['./path-builder.component.scss'],
})
export class PathBuilderComponent implements OnInit {
  locations: Location[] = [];

  constructor() {}

  ngOnInit(): void {}

  onNewCoordinatesAvailable(latLng: { latitude: number; longitude: number }) {
    this.locations.push({
      latitude: latLng.latitude,
      longitude: latLng.longitude,
    });
  }
}
