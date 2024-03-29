import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../../../../../components/button/button.component';
import { InputComponent } from '../../../../../components/input/input.component';

@Component({
  selector: 'app-branch',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    ButtonComponent,
    MatCheckboxModule,
    MatSelectModule
  ],
  templateUrl: './branch.component.html',
  styleUrl: './branch.component.scss'
})
export class BranchComponent {
  showDiv = false

  toggleDiv(){
    this.showDiv = !this.showDiv
  }
}
