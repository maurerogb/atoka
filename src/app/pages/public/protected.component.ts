import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protected',
  template: `<p>it is working</p>`,
  styles: [``]
})
export class ProtectedComponent implements OnInit {
  constructor(private route: Router) { }

  ngOnInit(): void {

console.log('re-routing to login page');

  }
}
