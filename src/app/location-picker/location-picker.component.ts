import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  @Output() newCoordinatesAvailable = new EventEmitter<{
    latitude: number;
    longitude: number;
  }>();

  map: google.maps.Map;
  coordinates = new google.maps.LatLng(40.441737, -80.012127);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 15,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.initializeMap();
  }

  ngOnDestroy() {}

  private onMapClicked(event: google.maps.MouseEvent) {
    // Add a marker to the map
    const marker = new google.maps.Marker({
      position: event.latLng,
    });
    marker.setMap(this.map);

    // Tell parent about the click coordinates
    this.newCoordinatesAvailable.emit({
      latitude: event.latLng.lat(),
      longitude: event.latLng.lng(),
    });
  }

  private initializeMap() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.map.addListener('click', (e) => this.onMapClicked(e));
  }
}
