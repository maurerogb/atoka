import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-nav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './dashboard-nav.component.html',
  styleUrl: './dashboard-nav.component.scss'
})
export class DashboardNavComponent {

  @Output() buttonToogle = new EventEmitter<boolean>()

  toggle(){
    this.buttonToogle.emit()
  }
}
