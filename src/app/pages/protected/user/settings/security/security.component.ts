import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ChangeAddressComponent } from '../../../../../components/modals/change-address/change-address.component';
import { ChangeEmploymentStatusComponent } from '../../../../../components/modals/change-employment-status/change-employment-status.component';
import { ChangePasswordComponent } from '../../../../../components/modals/change-password/change-password.component';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss'
})
export class SecurityComponent {
  constructor(    private matDialog : MatDialog
    ){
  }

  changePassword(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      ChangePasswordComponent,
      dialogConfig
    );
  }
  changeAddress(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      ChangeAddressComponent,
      dialogConfig
    );
  }
  changeEmployment(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      ChangeEmploymentStatusComponent,
      dialogConfig
    );
  }
}
