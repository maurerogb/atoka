import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonText!: string
  @Input() buttonStyles?: string
  @Input() disabled = false;
  @Input() loading = false;
  @Input() type?: string;


  @Output() click = new EventEmitter<boolean>()

  onClick() {
    this.click.emit(true)
  }
}
