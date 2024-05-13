import { Component, Input } from '@angular/core';
import { Employee } from '../../model/businessInfo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  @Input() details?: Employee

}
