import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatIconModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  changePassword(){
    
  }
}
