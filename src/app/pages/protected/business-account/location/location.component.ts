import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { AtokaSearchComponent } from '../../../../components/atoka-search/atoka-search.component';
import { Address } from '../../../../model/atoka-query';

@Component({
  selector: 'app-location',
  standalone: true,
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
  imports: [GoogleMapsModule, AtokaSearchComponent],
})
export class LocationComponent {
  center: google.maps.LatLngLiteral = { lat: 7.435101, lng: 10.475173 };
  zoom = 10;
  position: any;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions?: google.maps.LatLngLiteral ;

  addMarker(event: any) {
    console.log(event.latLng.toJSON());

   // this.markerPositions.push(event.latLng.toJSON());
  }

  // display: any;

  // center: google.maps.LatLngLiteral = {
  //     lat: 7.435101,
  //     lng: 10.475173
  // };

  // zoom = 6;

  // options: google.maps.MapOptions = {
  //   center: {lat: 7.455542, lng:  10.462354},
  //   zoom: 10
  // };

  setLocation(evt: Address) {
    console.log(evt);
    // this.center.lat = +evt.latitude;
    // this.center.lng= +evt.longitude;

    let loc = {
      lat: +evt.latitude,
      lng: +evt.longitude,
    };
    this.position = loc
    this.markerPositions  = loc;
   // this.zoom= 10
  }
}
