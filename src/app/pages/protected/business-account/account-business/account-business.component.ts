import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileComponent } from './profile/profile.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-account-business',
  standalone: true,
  imports: [
    MatTabsModule,
    ProfileComponent,
    AddBranchComponent,
    NotificationComponent
  ],
  templateUrl: './account-business.component.html',
  styleUrl: './account-business.component.scss'
})
export class AccountBusinessComponent {

}
