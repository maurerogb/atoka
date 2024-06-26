import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { environment } from '../../../assets/config';
import { PersonService } from '../../services/person.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-upload-profile-image',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './upload-profile-image.component.html',
  styleUrl: './upload-profile-image.component.scss'
})
export class UploadProfileImageComponent implements OnInit {


  hasBaseDropZoneOver:boolean = false;
  hasAnotherDropZoneOver:boolean = false;
  response:string | undefined;

  testMode = environment.testMode;
   localUrl = environment.localUrl;
    remoteUrl = environment.remoteUrl;
    baseUrl: string = "";
    files?: FileList | undefined;
    file: File  | undefined;

 constructor(private userServ: AuthenticationService){}


ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  this.baseUrl = this.testMode ? this.localUrl : this.remoteUrl;

  console.log(this.baseUrl);


}

onFileChange(event: any) {
 // this.files = event.target.files;

  console.log(event.target);

}

fileOverBase(e: any): void {
  console.log(e);

  this.hasBaseDropZoneOver = e;
}



  @Input() image: FormControl = new FormControl();

  uploadPhoto(event: any) {

    console.log(event.target.files[0]);


    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();


      reader.onload = (_event: any) => {
        this.image.patchValue(_event.target.result);
      };

      reader.readAsDataURL(event.target.files[0]);


    }
  }
}
