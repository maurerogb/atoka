import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-type',
  standalone: true,
  imports: [MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './account-type.component.html',
  styleUrl: './account-type.component.scss'
})
export class AccountTypeComponent {
  selectedType!: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  saveAccountType() {
    this.router.navigate(['../form'], { relativeTo: this.route });
  }
}
