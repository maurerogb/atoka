import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../components/button/button.component';
import { InputComponent } from '../../../../../components/input/input.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ButtonComponent, InputComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
