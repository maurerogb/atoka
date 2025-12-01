import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { AccountComponent } from '../../business-account/business-settings/account/account.component';
import { MyDetailsComponent } from '../../business-account/business-settings/my-details/my-details.component';
import { NotificationComponent } from '../../business-account/business-settings/notification/notification.component';
import { SecurityComponent } from '../../business-account/business-settings/security/security.component';
import { EmploymentStatusComponent } from '../../tenant/settings/employment-status/employment-status.component';
import { ClaimPropertyComponent } from '../../tenant/settings/claim-property/claim-property.component';

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

}
