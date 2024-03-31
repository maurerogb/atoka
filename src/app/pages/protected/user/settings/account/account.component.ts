import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../components/button/button.component';
import { InputComponent } from '../../../../../components/input/input.component';

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
