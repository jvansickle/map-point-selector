import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location';

@Component({
  selector: 'app-path-builder',
  templateUrl: './path-builder.component.html',
  styleUrls: ['./path-builder.component.scss'],
})
export class PathBuilderComponent implements OnInit {
  locations: Location[] = [];

  constructor() {
    this.locations.push({ latitude: 100, longitude: 200 });
    this.locations.push({ latitude: 100, longitude: 200 });
    this.locations.push({ latitude: 100, longitude: 200 });
    this.locations.push({ latitude: 100, longitude: 200 });
    this.locations.push({ latitude: 100, longitude: 200 });
    this.locations.push({ latitude: 100, longitude: 200 });
    this.locations.push({ latitude: 100, longitude: 200 });
    this.locations.push({ latitude: 100, longitude: 200 });
    this.locations.push({ latitude: 100, longitude: 200 });
    this.locations.push({ latitude: 100, longitude: 200 });
    this.locations.push({ latitude: 100, longitude: 200 });
    this.locations.push({ latitude: 100, longitude: 200 });
    this.locations.push({ latitude: 100, longitude: 200 });
    this.locations.push({ latitude: 100, longitude: 200 });
  }

  ngOnInit(): void {}
}
