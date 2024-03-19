import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../../../../components/button/button.component';

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

}
