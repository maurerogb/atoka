import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {


  notificationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit():void {
    this.notificationForm = this.fb.group({
      allowAllNotification : '',
      notifyMe : ''
    })
  }

  onChange(event:any){

  }
}
