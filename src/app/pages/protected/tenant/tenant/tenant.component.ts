import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../../../../components/button/button.component';
import { TenantRequestComponent } from '../tenant-modals/tenant-request/tenant-request.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ClaimPropertyComponent } from '../tenant-modals/claim-property/claim-property.component';

@Component({
  selector: 'app-tenant',
  standalone: true,
  imports: [
    MatSelectModule, ButtonComponent, MatMenuModule
  ],
  templateUrl: './tenant.component.html',
  styleUrl: './tenant.component.scss'
})
export class TenantComponent {

  constructor(
    private matDialog : MatDialog
  ){}

  tenantRequest(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      TenantRequestComponent,
      dialogConfig
    );
  }
  claimProperty(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      ClaimPropertyComponent,
      dialogConfig
    );
  }
}
