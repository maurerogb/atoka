import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UploadProfileImageComponent } from "../../../../components/upload-profile-image/upload-profile-image.component";

@Component({
    selector: 'app-profile-picture',
    standalone: true,
    templateUrl: './profile-picture.component.html',
    styleUrl: './profile-picture.component.scss',
    imports: [MatIconModule, UploadProfileImageComponent]
})
export class ProfilePictureComponent {

}
