import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss'
})
export class UploadFileComponent {

  @Input() file: FormControl = new FormControl();

  uploadFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (_event: any) => {
        this.file.patchValue(_event.target.result);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}