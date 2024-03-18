import { Component } from '@angular/core';
import { InputComponent } from '../../../../../components/input/input.component';
import { ButtonComponent } from '../../../../../components/button/button.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-claim-property',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    MatCheckboxModule,
    MatSelectModule,
    CommonModule
  ],
  templateUrl: './claim-property.component.html',
  styleUrl: './claim-property.component.scss'
})
export class ClaimPropertyComponent {
  showDiv = false

  toggleDiv(){
    this.showDiv = !this.showDiv
  }
}
