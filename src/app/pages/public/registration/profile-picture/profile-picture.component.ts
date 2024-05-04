import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UploadProfileImageComponent } from "../../../../components/upload-profile-image/upload-profile-image.component";
import { PersonService } from '../../../../services/person.service';
import { FileUploadModule, FileUploader } from 'ng2-file-upload';
import { environment } from '../../../../../assets/config';
import { loginInfo } from '../../../../model/authentication';
import { ToastrService } from 'ngx-toastr';
import { ResponseCode } from '../../../../model/enums';

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.scss',
  imports: [MatIconModule, FileUploadModule, UploadProfileImageComponent]
})
export class ProfilePictureComponent {
  imageURL: string = '';
  uploadedImage: any;
  uploader: FileUploader | undefined
  baseUrl: string = '';
  constructor(private personServ: PersonService, private toastr: ToastrService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.initUploader();
  }



  uploadPhoto(event: any) {

    // console.log('event', event.target.files[0]);

    this.uploadedImage = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(this.uploadedImage)
  }

  saveProfilePicture() {
    let formdata = new FormData();

    let userId: any = localStorage.getItem('userId');
    formdata.append('ProfilePhoto', this.uploadedImage)
    formdata.append('userId', userId)
    console.log(formdata);

    this.personServ.uploadProfilePhoto(formdata).subscribe({
      next: resp => {
        console.log('uploaded ..', resp);
        if (resp.responseCode == ResponseCode.Success) {
          console.log(resp.responseCode);

          this.toastr.show(resp.description, 'Success')
        }
      }
    })

  }

}
