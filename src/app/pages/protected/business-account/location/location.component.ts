import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 22.2736308,
      lng: 70.7512555
  };
  zoom = 6;

  options: google.maps.MapOptions = {
    center: {lat: 7.455542, lng:  10.462354},
    zoom: 100
  };

}
