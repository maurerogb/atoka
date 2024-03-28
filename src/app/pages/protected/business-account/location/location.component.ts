import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {

  options: google.maps.MapOptions = {
    center: {lat: 7.455542, lng:  10.462354},
    zoom: 4
  };

}
