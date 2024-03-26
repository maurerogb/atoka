import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChangePasswordComponent } from '../../../../components/modals/change-password/change-password.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AccountComponent } from './account/account.component';
import { BranchComponent } from './branch/branch.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { NotificationComponent } from './notification/notification.component';
import { SecurityComponent } from './security/security.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-business-settings',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatIconModule,
    AccountComponent,
    BranchComponent,
    MyDetailsComponent,
    SecurityComponent,
    MatTabsModule,
    NotificationComponent
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
