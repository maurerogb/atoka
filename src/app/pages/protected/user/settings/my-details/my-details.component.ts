import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../../../../../components/button/button.component';
import { InputComponent } from '../../../../../components/input/input.component';
import { UploadFileComponent } from '../../../../../components/upload-file/upload-file.component';
import { UploadProfileImageComponent } from '../../../../../components/upload-profile-image/upload-profile-image.component';
import { SettingsService } from '../../../../../services/settings.service';

@Component({
  selector: 'app-my-details',
  standalone: true,
  imports: [
    ButtonComponent,
    UploadProfileImageComponent,
    UploadFileComponent,
    InputComponent,
    MatSelectModule
  ],
  templateUrl: './my-details.component.html',
  styleUrl: './my-details.component.scss'
})
export class MyDetailsComponent {
  userId!: any;
  details: any;

  constructor(
    private settingService : SettingsService
  ){}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.getUserDetails()
  }

  getUserDetails(){
    this.settingService.getUserDetails(this.userId).subscribe((res : any) => {
      this.details = res.data
    })
  }
}
