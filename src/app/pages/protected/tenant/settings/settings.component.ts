import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NotificationComponent } from './notification/notification.component';
import { AccountComponent } from './account/account.component';
import { SecurityComponent } from './security/security.component';
import { EmploymentStatusComponent } from './employment-status/employment-status.component';
import { ClaimPropertyComponent } from './claim-property/claim-property.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MyDetailsComponent } from './my-details/my-details.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatIconModule,
    NotificationComponent,
    AccountComponent,
    SecurityComponent,
    EmploymentStatusComponent,
    ClaimPropertyComponent,
    MatTabsModule,
    MyDetailsComponent

  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  changePassword(){

  }
}
