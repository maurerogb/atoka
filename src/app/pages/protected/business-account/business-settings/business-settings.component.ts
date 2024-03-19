import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChangePasswordComponent } from '../../../../components/modals/change-password/change-password.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-business-settings',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatIconModule
  ],
  templateUrl: './business-settings.component.html',
  styleUrl: './business-settings.component.scss'
})
export class BusinessSettingsComponent {
  constructor(
    private matDialog : MatDialog
  ){}

  changePassword(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      ChangePasswordComponent,
      dialogConfig
    );
  }
}
