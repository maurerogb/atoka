import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BackButtonComponent } from '../../../components/back-button/back-button.component';

@Component({
  standalone: true,
  imports: [ MatIconModule, RouterModule, BackButtonComponent ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

}
