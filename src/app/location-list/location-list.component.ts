import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../models/location';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent implements OnInit {
  @Input() locations: Location[];

  constructor() {}

  ngOnInit(): void {}
}
