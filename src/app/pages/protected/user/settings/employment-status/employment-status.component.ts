import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../../../../../components/button/button.component';
import { InputComponent } from '../../../../../components/input/input.component';

@Component({
  selector: 'app-employment-status',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatSelectModule,
    InputComponent,
    ButtonComponent,
    CommonModule
  ],
  templateUrl: './employment-status.component.html',
  styleUrl: './employment-status.component.scss'
})
export class EmploymentStatusComponent {

  showDiv = false

  toggleDiv(){
    this.showDiv = !this.showDiv
  }
}
