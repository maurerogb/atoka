import { Component } from '@angular/core';
import { InputComponent } from '../../../../../components/input/input.component';
import { ButtonComponent } from '../../../../../components/button/button.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-branch',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    ButtonComponent,
    MatCheckboxModule,
    MatSelectModule
  ],
  templateUrl: './add-branch.component.html',
  styleUrl: './add-branch.component.scss'
})
export class AddBranchComponent {
  showDiv = false

  toggleDiv(){
    this.showDiv = !this.showDiv
  }
}
