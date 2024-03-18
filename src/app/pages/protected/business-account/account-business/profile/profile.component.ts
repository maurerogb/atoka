import { Component } from '@angular/core';
import { InputComponent } from '../../../../../components/input/input.component';
import { ButtonComponent } from '../../../../../components/button/button.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
