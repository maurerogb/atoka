import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { FileUploadModule, FileUploader } from 'ng2-file-upload';
import { environment } from '../../../assets/config';
import { PersonService } from '../../services/person.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-upload-profile-image',
  standalone: true,
  imports: [FileUploadModule, CommonModule, FormsModule],
  templateUrl: './upload-profile-image.component.html',
  styleUrl: './upload-profile-image.component.scss'
})
export class UploadProfileImageComponent implements OnInit {


  uploader:FileUploader | undefined;
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
  this.initializeUploader();

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

initializeUploader(){
  this.uploader = new FileUploader({
    url: this.baseUrl+'OccupantDetails/UploadPhoto',
    authToken:'bearer '+ this.userServ.token,
    allowedFileType:['image'],
    removeAfterUpload: true,
    isHTML5:true,
    autoUpload: true,
    maxFileSize: (10 * 1024* 1024),
  })

  userId:this.userServ.userId;

  this.uploader.onAfterAddingFile= (file)=>{
     file.withCredentials = false;
  }

  this.uploader.onSuccessItem= (item, response, status, headers) => {

    if(response){
      const photo = JSON.parse(response);
      console.log(photo);

    }
  }

  }

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
