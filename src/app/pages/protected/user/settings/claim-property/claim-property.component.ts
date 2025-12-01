import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../../../../../components/button/button.component';
import { InputComponent } from '../../../../../components/input/input.component';
import { UploadFileComponent } from '../../../../../components/upload-file/upload-file.component';

@Component({
  selector: 'app-claim-property',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    MatCheckboxModule,
    MatSelectModule,
    CommonModule,
    UploadFileComponent
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
