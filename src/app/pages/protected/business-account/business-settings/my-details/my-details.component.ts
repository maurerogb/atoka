import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../components/button/button.component';
import { UploadProfileImageComponent } from '../../../../../components/upload-profile-image/upload-profile-image.component';
import { UploadFileComponent } from '../../../../../components/upload-file/upload-file.component';

@Component({
  selector: 'app-my-details',
  standalone: true,
  imports: [
     ButtonComponent,
     UploadProfileImageComponent,
     UploadFileComponent
  ],
  templateUrl: './my-details.component.html',
  styleUrl: './my-details.component.scss'
})
export class MyDetailsComponent {

}
