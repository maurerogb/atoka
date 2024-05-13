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
      lat:  6.455284,
      lng:3.410702
  };
  zoom = 15;

  circleCenter: google.maps.LatLngLiteral = { lat:  6.455284,
    lng:3.410702};
  radius = 3;



}
