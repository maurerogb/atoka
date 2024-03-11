import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'atoka-back-button',
  imports: [ MatIconModule, RouterModule ],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.scss'
})
export class BackButtonComponent implements OnInit {
  @Output() clickEvent = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  previousPage() {
    this.clickEvent.emit();
    this.router.navigate(['./../'], { relativeTo: this.route, queryParamsHandling: 'merge' });
  }

}
