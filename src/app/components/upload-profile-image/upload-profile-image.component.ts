import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-upload-profile-image',
  standalone: true,
  imports: [],
  templateUrl: './upload-profile-image.component.html',
  styleUrl: './upload-profile-image.component.scss'
})
export class UploadProfileImageComponent {
  @Input() image: FormControl = new FormControl();

  uploadPhoto(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();


      reader.onload = (_event: any) => {
        this.image.patchValue(_event.target.result);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
