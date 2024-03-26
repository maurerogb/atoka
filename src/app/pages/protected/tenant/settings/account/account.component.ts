import { Component } from '@angular/core';
import { InputComponent } from '../../../../../components/input/input.component';
import { ButtonComponent } from '../../../../../components/button/button.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

}
