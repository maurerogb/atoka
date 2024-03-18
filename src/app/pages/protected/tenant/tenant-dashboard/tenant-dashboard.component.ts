import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../../../components/button/button.component';

@Component({
  selector: 'app-tenant-dashboard',
  standalone: true,
  imports: [
    MatIconModule,
    ButtonComponent
  ],
  templateUrl: './tenant-dashboard.component.html',
  styleUrl: './tenant-dashboard.component.scss'
})
export class TenantDashboardComponent {

}
